/* ========================================
   FleetVest — Investor Dashboard Logic
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ══════════════════════════════════
    //  LEAFLET MAP — Investor view
    // ══════════════════════════════════
    const map = L.map('investorMap', {
        zoomControl: false,
        attributionControl: false,
    }).setView([14.7167, -17.4500], 12);

    L.control.zoom({ position: 'topright' }).addTo(map);

    // Dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Add vehicle markers
    DATA.vehicles.forEach(v => {
        const statusClass = v.status;
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `
                <div class="marker-pin ${statusClass}">
                    <div class="marker-pulse"></div>
                    ${v.driverInitials}
                </div>
            `,
            iconSize: [34, 42],
            iconAnchor: [17, 42],
            popupAnchor: [0, -44],
        });

        const marker = L.marker([v.lat, v.lng], { icon }).addTo(map);

        const popupContent = `
            <div class="popup-title">${v.model}</div>
            <div class="popup-detail">🚘 ${v.plate} · ${v.color}</div>
            <div class="popup-detail">👤 ${v.driver}</div>
            <div class="popup-detail">📍 ${v.heading || v.statusLabel}</div>
            ${v.speed > 0 ? `<div class="popup-detail">🏎️ ${v.speed} km/h</div>` : ''}
            ${v.revenueToday > 0 ? `<div class="popup-detail">💰 ${formatCFA(v.revenueToday)} aujourd'hui</div>` : ''}
            <div class="popup-status" style="color:${v.status === 'active' ? 'var(--accent-green-light)' : v.status === 'idle' ? 'var(--accent-orange)' : '#f87171'}">
                ● ${v.statusLabel}
            </div>
        `;

        marker.bindPopup(popupContent);
    });

    // Add garage markers
    DATA.garages.forEach(g => {
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-pin garage">🔧</div>`,
            iconSize: [34, 42],
            iconAnchor: [17, 42],
            popupAnchor: [0, -44],
        });

        const marker = L.marker([g.lat, g.lng], { icon }).addTo(map);
        marker.bindPopup(`
            <div class="popup-title">${g.name}</div>
            <div class="popup-detail">📍 ${g.address}</div>
            <div class="popup-detail" style="color:var(--accent-blue);">Garage partenaire certifié</div>
        `);
    });

    // Fit bounds to all markers
    const allCoords = [
        ...DATA.vehicles.map(v => [v.lat, v.lng]),
        ...DATA.garages.map(g => [g.lat, g.lng]),
    ];
    map.fitBounds(allCoords, { padding: [30, 30] });

    // ══════════════════════════════════
    //  VEHICLE LIST
    // ══════════════════════════════════
    const vehicleList = document.getElementById('vehicleList');
    vehicleList.innerHTML = DATA.vehicles.map(v => `
        <div class="vehicle-item">
            <div class="vehicle-avatar">${v.emoji}</div>
            <div class="vehicle-info">
                <div class="vehicle-name">${v.model}</div>
                <div class="vehicle-plate">${v.plate} · ${v.color}</div>
            </div>
            <div class="vehicle-driver">
                <div class="vehicle-driver-name">${v.driver}</div>
                <span class="status-badge ${v.status}">
                    <span class="status-dot-sm ${v.status}"></span>
                    ${v.statusLabel.split(' — ')[0]}
                </span>
            </div>
        </div>
    `).join('');

    // ══════════════════════════════════
    //  REVENUE CHART
    // ══════════════════════════════════
    const maxRevenue = Math.max(...DATA.revenue7days.map(d => d.total));
    const chart = document.getElementById('revenueChart');

    chart.innerHTML = DATA.revenue7days.map((d, i) => {
        const height = (d.total / maxRevenue) * 100;
        const isToday = i === DATA.revenue7days.length - 1;
        return `
            <div class="bar-group">
                <div class="bar-value">${(d.total / 1000).toFixed(0)}K</div>
                <div class="bar ${isToday ? 'green' : 'blue'}" style="height: ${height}%"></div>
                <div class="bar-label">${d.day}</div>
            </div>
        `;
    }).join('');

    // ══════════════════════════════════
    //  DRIVER LIST
    // ══════════════════════════════════
    const driverList = document.getElementById('driverList');
    driverList.innerHTML = DATA.drivers.map(d => `
        <div class="driver-item">
            <div class="driver-avatar user-avatar ${d.color}">${d.initials}</div>
            <div class="driver-info">
                <div class="driver-name">${d.name}</div>
                <div class="driver-meta">
                    <span>${d.vehicle}</span> · 
                    <span class="stars">${d.stars}</span>
                    <span>${d.score}</span>
                </div>
            </div>
            <div class="driver-stats">
                <div class="driver-revenue" style="color:${d.revenueToday > 0 ? 'var(--accent-green-light)' : 'var(--text-tertiary)'}">
                    ${d.revenueToday > 0 ? formatCFA(d.revenueToday) : '—'}
                </div>
                <div class="driver-score">
                    ${d.courses > 0 ? d.courses + ' courses' : d.status === 'maintenance' ? 'Véh. en panne' : 'Hors ligne'}
                </div>
            </div>
        </div>
    `).join('');

    // ══════════════════════════════════
    //  TRANSACTION LIST
    // ══════════════════════════════════
    const txList = document.getElementById('transactionList');
    txList.innerHTML = DATA.transactions.map(t => `
        <div class="transaction-item">
            <div class="tx-icon ${t.type}">${t.icon}</div>
            <div class="tx-info">
                <div class="tx-title">${t.title}</div>
                <div class="tx-meta">${t.meta} · ${t.time}</div>
            </div>
            <div class="tx-amount ${t.positive ? 'positive' : 'negative'}">
                ${t.positive ? '+' : ''}${formatCFA(t.amount)}
            </div>
        </div>
    `).join('');

    // ══════════════════════════════════
    //  MAINTENANCE LIST
    // ══════════════════════════════════
    const maintList = document.getElementById('maintenanceList');
    maintList.innerHTML = DATA.maintenanceLog.map(m => `
        <div class="maintenance-item">
            <div class="maint-icon" style="background:rgba(245,158,11,0.1);">${m.icon}</div>
            <div class="maint-info">
                <div class="maint-title">${m.title}</div>
                <div class="maint-detail">${m.vehicle}<br>${m.garage}</div>
            </div>
            <div class="maint-cost">
                <div class="maint-amount">-${formatCFA(m.cost)}</div>
                <div class="maint-date">${m.date}</div>
                <span class="status-badge ${m.status === 'En cours' ? 'idle' : 'active'}" style="margin-top:4px;">
                    ${m.status}
                </span>
            </div>
        </div>
    `).join('');

});
