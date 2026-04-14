/* ========================================
   FleetVest — Driver Dashboard Logic
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ══════════════════════════════════
    //  LEAFLET MAP — Driver route view
    // ══════════════════════════════════
    const map = L.map('driverMap', {
        zoomControl: false,
        attributionControl: false,
    }).setView([14.7167, -17.4500], 12);

    L.control.zoom({ position: 'topright' }).addTo(map);

    // Dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Draw route polyline
    const routeCoords = DATA.driverRoute;
    const polyline = L.polyline(routeCoords, {
        color: '#10B981',
        weight: 3,
        opacity: 0.8,
        dashArray: '8, 6',
    }).addTo(map);

    // Start marker
    const startIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-pin active" style="background:#10B981;"><span style="font-size:12px;">🏁</span></div>`,
        iconSize: [34, 42],
        iconAnchor: [17, 42],
    });
    L.marker(routeCoords[0], { icon: startIcon }).addTo(map)
        .bindPopup('<div class="popup-title">Départ · 07h15</div><div class="popup-detail">Aéroport AIBD</div>');

    // Current position marker (last point)
    const currentIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div class="marker-pin active">
                <div class="marker-pulse"></div>
                DN
            </div>
        `,
        iconSize: [34, 42],
        iconAnchor: [17, 42],
        popupAnchor: [0, -44],
    });
    L.marker(routeCoords[routeCoords.length - 1], { icon: currentIcon }).addTo(map)
        .bindPopup(`
            <div class="popup-title">Position actuelle</div>
            <div class="popup-detail">📍 Plateau — Place de l'Indépendance</div>
            <div class="popup-detail">🏎️ 42 km/h</div>
            <div class="popup-detail">💰 ${formatCFA(95500)} aujourd'hui</div>
            <div class="popup-status" style="color:var(--accent-green-light);">● En course</div>
        `);

    // Stop markers along the route
    const stops = [
        { idx: 1, label: 'Plateau', time: '08:00' },
        { idx: 2, label: 'Almadies', time: '08:30' },
        { idx: 3, label: 'Mermoz', time: '09:12' },
        { idx: 5, label: 'Fann', time: '10:20' },
        { idx: 6, label: 'Médina', time: '10:50' },
        { idx: 8, label: 'Parcelles', time: '12:15' },
        { idx: 10, label: 'Pikine', time: '14:30' },
        { idx: 11, label: 'Keur Massar', time: '15:20' },
    ];

    stops.forEach(s => {
        const smallIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="width:12px;height:12px;border-radius:50%;background:rgba(16,185,129,0.8);border:2px solid #0a0a0f;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6],
        });
        L.marker(routeCoords[s.idx], { icon: smallIcon }).addTo(map)
            .bindPopup(`<div class="popup-title">${s.label}</div><div class="popup-detail">⏰ ${s.time}</div>`);
    });

    map.fitBounds(polyline.getBounds(), { padding: [30, 30] });

    // ══════════════════════════════════
    //  TRIPS LIST
    // ══════════════════════════════════
    const tripList = document.getElementById('tripList');
    tripList.innerHTML = DATA.trips.map(t => `
        <div class="trip-item">
            <div style="font-size:0.72rem; color:var(--text-tertiary); width:40px; flex-shrink:0; text-align:center;">${t.time}</div>
            <div class="trip-route">
                <div class="trip-points">
                    <span class="trip-dot start"></span>
                    <span style="font-size:0.82rem;">${t.from}</span>
                    <span class="trip-line"></span>
                    <span class="trip-dot end"></span>
                    <span style="font-size:0.82rem;">${t.to}</span>
                </div>
                <div class="trip-meta">${t.distance} · ${t.duration}</div>
            </div>
            <div style="text-align:right;">
                <div class="trip-amount">+${formatCFA(t.amount)}</div>
                <div class="trip-platform">${t.platform}</div>
            </div>
        </div>
    `).join('');

    // ══════════════════════════════════
    //  DRIVER REVENUE CHART
    // ══════════════════════════════════
    const maxRev = Math.max(...DATA.driverRevenue7days.map(d => d.total));
    const chart = document.getElementById('driverRevenueChart');

    chart.innerHTML = DATA.driverRevenue7days.map((d, i) => {
        const height = (d.total / maxRev) * 100;
        const isToday = i === DATA.driverRevenue7days.length - 1;
        return `
            <div class="bar-group">
                <div class="bar-value">${(d.total / 1000).toFixed(0)}K</div>
                <div class="bar ${isToday ? 'green' : 'blue'}" style="height: ${height}%"></div>
                <div class="bar-label">${d.day}</div>
            </div>
        `;
    }).join('');

    // ══════════════════════════════════
    //  CHECKLIST
    // ══════════════════════════════════
    const checklistEl = document.getElementById('checklistItems');
    checklistEl.innerHTML = DATA.checklist.map((item, i) => `
        <div class="checklist-item ${item.checked ? 'checked-item' : ''}" id="check-${i}">
            <div class="check-box ${item.checked ? 'checked' : ''}" onclick="toggleCheck(${i})">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span>${item.label}</span>
        </div>
    `).join('');
});

// Toggle checklist items
function toggleCheck(i) {
    DATA.checklist[i].checked = !DATA.checklist[i].checked;
    const item = document.getElementById(`check-${i}`);
    const box = item.querySelector('.check-box');
    
    if (DATA.checklist[i].checked) {
        box.classList.add('checked');
        item.classList.add('checked-item');
    } else {
        box.classList.remove('checked');
        item.classList.remove('checked-item');
    }
}
