/* ========================================
   FleetVest — Shared Fictional Data
   All names, vehicles, routes, and financial
   data used across both dashboards.
   ======================================== */

const DATA = {

    // ── Investor ──
    investor: {
        name: 'Moussa Diallo',
        initials: 'MD',
        location: 'Paris 🇫🇷',
        role: 'Investisseur Diaspora',
        totalVehicles: 5,
        activeVehicles: 4,
        splitOwner: 60,
        splitDriver: 40,
    },

    // ── Vehicles ──
    vehicles: [
        {
            id: 1,
            model: 'Toyota Corolla 2023',
            plate: 'DK-4521-AB',
            color: 'Blanche',
            emoji: '🚗',
            driver: 'Daouda Ndiaye',
            driverInitials: 'DN',
            driverColor: 'cyan',
            status: 'active',
            statusLabel: 'En course',
            lat: 14.7167,
            lng: -17.4677,
            speed: 42,
            revenueToday: 95500,
            km: 187,
            heading: 'vers Plateau',
        },
        {
            id: 2,
            model: 'Hyundai Accent 2022',
            plate: 'DK-7834-CD',
            color: 'Grise',
            emoji: '🚙',
            driver: 'Abou Diop',
            driverInitials: 'AD',
            driverColor: 'blue',
            status: 'active',
            statusLabel: 'En course',
            lat: 14.6937,
            lng: -17.4441,
            speed: 35,
            revenueToday: 78000,
            km: 156,
            heading: 'vers Almadies',
        },
        {
            id: 3,
            model: 'Kia Rio 2023',
            plate: 'DK-2156-EF',
            color: 'Noire',
            emoji: '🚘',
            driver: 'Souleymane Fall',
            driverInitials: 'SF',
            driverColor: 'purple',
            status: 'active',
            statusLabel: 'En attente client',
            lat: 14.7485,
            lng: -17.5138,
            speed: 0,
            revenueToday: 62000,
            km: 134,
            heading: 'Almadies — Point E',
        },
        {
            id: 4,
            model: 'Suzuki Dzire 2022',
            plate: 'DK-9903-GH',
            color: 'Blanche',
            emoji: '🚐',
            driver: 'Nene Galle Ba',
            driverInitials: 'NB',
            driverColor: 'orange',
            status: 'idle',
            statusLabel: 'À l\'arrêt — déjeuner',
            lat: 14.6826,
            lng: -17.4500,
            speed: 0,
            revenueToday: 55000,
            km: 112,
            heading: 'Médina',
        },
        {
            id: 5,
            model: 'Renault Logan 2021',
            plate: 'DK-6678-IJ',
            color: 'Grise',
            emoji: '🔧',
            driver: 'Ibrahima Sarr',
            driverInitials: 'IS',
            driverColor: 'green',
            status: 'maintenance',
            statusLabel: 'En réparation — Garage Medina',
            lat: 14.6868,
            lng: -17.4420,
            speed: 0,
            revenueToday: 0,
            km: 0,
            heading: '',
        },
    ],

    // ── Garages ──
    garages: [
        { name: 'Garage Medina Auto', lat: 14.6850, lng: -17.4430, address: 'Rue ME-42, Médina' },
        { name: 'Auto Service Pikine', lat: 14.7564, lng: -17.3908, address: 'Route de Pikine' },
        { name: 'Keur Massar Motors', lat: 14.7830, lng: -17.3120, address: 'Avenue principale, Keur Massar' },
    ],

    // ── Drivers ──
    drivers: [
        {
            name: 'Daouda Ndiaye',
            initials: 'DN',
            color: 'cyan',
            vehicle: 'Toyota Corolla',
            score: 4.8,
            stars: '★★★★★',
            revenueToday: 95500,
            courses: 12,
            experience: '3 ans',
            status: 'active',
        },
        {
            name: 'Abou Diop',
            initials: 'AD',
            color: 'blue',
            vehicle: 'Hyundai Accent',
            score: 4.6,
            stars: '★★★★☆',
            revenueToday: 78000,
            courses: 9,
            experience: '2 ans',
            status: 'active',
        },
        {
            name: 'Souleymane Fall',
            initials: 'SF',
            color: 'purple',
            vehicle: 'Kia Rio',
            score: 4.9,
            stars: '★★★★★',
            revenueToday: 62000,
            courses: 8,
            experience: '5 ans',
            status: 'active',
        },
        {
            name: 'Nene Galle Ba',
            initials: 'NB',
            color: 'orange',
            vehicle: 'Suzuki Dzire',
            score: 4.5,
            stars: '★★★★☆',
            revenueToday: 55000,
            courses: 7,
            experience: '1 an',
            status: 'idle',
        },
        {
            name: 'Ibrahima Sarr',
            initials: 'IS',
            color: 'green',
            vehicle: 'Renault Logan',
            score: 4.3,
            stars: '★★★★☆',
            revenueToday: 0,
            courses: 0,
            experience: '4 ans',
            status: 'maintenance',
        },
    ],

    // ── Revenue (7 days) ──
    revenue7days: [
        { day: 'Lun', total: 480000 },
        { day: 'Mar', total: 520000 },
        { day: 'Mer', total: 455000 },
        { day: 'Jeu', total: 610000 },
        { day: 'Ven', total: 590000 },
        { day: 'Sam', total: 510000 },
        { day: 'Dim', total: 527400 },
    ],

    // ── Driver Revenue (7 days) ──
    driverRevenue7days: [
        { day: 'Lun', total: 82000 },
        { day: 'Mar', total: 91000 },
        { day: 'Mer', total: 76000 },
        { day: 'Jeu', total: 105000 },
        { day: 'Ven', total: 98000 },
        { day: 'Sam', total: 87500 },
        { day: 'Dim', total: 95500 },
    ],

    // ── Transactions ──
    transactions: [
        { type: 'income', icon: '💰', title: 'Versement quotidien — Daouda N.', meta: 'Toyota Corolla · Yango', amount: 57300, positive: true, time: 'Aujourd\'hui, 18h' },
        { type: 'income', icon: '💰', title: 'Versement quotidien — Abou D.', meta: 'Hyundai Accent · Uber', amount: 46800, positive: true, time: 'Aujourd\'hui, 17h30' },
        { type: 'income', icon: '💰', title: 'Versement quotidien — Souleymane F.', meta: 'Kia Rio · Yango', amount: 37200, positive: true, time: 'Aujourd\'hui, 17h' },
        { type: 'expense', icon: '🔧', title: 'Vidange + filtre — Renault Logan', meta: 'Garage Medina Auto', amount: -35000, positive: false, time: 'Hier, 14h' },
        { type: 'income', icon: '💰', title: 'Versement quotidien — Nene Galle B.', meta: 'Suzuki Dzire · Heetch', amount: 33000, positive: true, time: 'Hier, 18h' },
        { type: 'expense', icon: '⛽', title: 'Plein carburant — Kia Rio', meta: 'Station Total Almadies', amount: -33500, positive: false, time: 'Hier, 09h' },
        { type: 'transfer', icon: '📲', title: 'Transfert Wave — Moussa Diallo', meta: 'Versement hebdomadaire', amount: 412000, positive: true, time: '10 Avril' },
    ],

    // ── Maintenance ──
    maintenanceLog: [
        { icon: '🔧', title: 'Vidange + Filtre à huile', vehicle: 'Renault Logan · DK-6678-IJ', garage: 'Garage Medina Auto', cost: 35000, date: '12 Avril 2026', status: 'En cours' },
        { icon: '🛞', title: 'Changement pneus avant (x2)', vehicle: 'Suzuki Dzire · DK-9903-GH', garage: 'Auto Service Pikine', cost: 48000, date: '8 Avril 2026', status: 'Terminé' },
        { icon: '🔋', title: 'Remplacement batterie', vehicle: 'Hyundai Accent · DK-7834-CD', garage: 'Garage Medina Auto', cost: 42000, date: '2 Avril 2026', status: 'Terminé' },
        { icon: '💨', title: 'Climatisation — recharge gaz', vehicle: 'Toyota Corolla · DK-4521-AB', garage: 'Keur Massar Motors', cost: 25000, date: '28 Mars 2026', status: 'Terminé' },
        { icon: '🛑', title: 'Plaquettes de frein arrière', vehicle: 'Kia Rio · DK-2156-EF', garage: 'Garage Medina Auto', cost: 28000, date: '20 Mars 2026', status: 'Terminé' },
    ],

    // ── Trips (Driver: Daouda) ──
    trips: [
        { from: 'Aéroport AIBD', to: 'Plateau — Hôtel Terrou-Bi', amount: 15000, distance: '47 km', duration: '52 min', platform: 'Yango', time: '07:15' },
        { from: 'Plateau', to: 'Almadies — Sea Plaza', amount: 4500, distance: '8 km', duration: '18 min', platform: 'Yango', time: '08:30' },
        { from: 'Almadies', to: 'Mermoz — VDN', amount: 3500, distance: '6 km', duration: '14 min', platform: 'Uber', time: '09:12' },
        { from: 'VDN', to: 'Ouakam — Mosquée', amount: 3000, distance: '5 km', duration: '12 min', platform: 'Yango', time: '09:45' },
        { from: 'Ouakam', to: 'Fann — Université', amount: 3200, distance: '4 km', duration: '10 min', platform: 'Heetch', time: '10:20' },
        { from: 'Fann', to: 'Médina', amount: 2800, distance: '3 km', duration: '8 min', platform: 'Yango', time: '10:50' },
        { from: 'Médina', to: 'Grand Dakar', amount: 3000, distance: '4 km', duration: '11 min', platform: 'Uber', time: '11:30' },
        { from: 'Grand Dakar', to: 'Parcelles Assainies', amount: 5500, distance: '9 km', duration: '22 min', platform: 'Yango', time: '12:15' },
        { from: 'Parcelles', to: 'Guédiawaye', amount: 4000, distance: '7 km', duration: '16 min', platform: 'Yango', time: '13:40' },
        { from: 'Guédiawaye', to: 'Pikine — marché', amount: 3500, distance: '5 km', duration: '13 min', platform: 'Heetch', time: '14:30' },
        { from: 'Pikine', to: 'Keur Massar', amount: 6000, distance: '12 km', duration: '25 min', platform: 'Uber', time: '15:20' },
        { from: 'Keur Massar', to: 'Plateau — Place Indépendance', amount: 8500, distance: '22 km', duration: '35 min', platform: 'Yango', time: '16:45' },
    ],

    // ── Daouda's route for polyline (simplified) ──
    driverRoute: [
        [14.7400, -17.4900],  // AIBD direction approx
        [14.6693, -17.4380],  // Plateau
        [14.7485, -17.5138],  // Almadies
        [14.7128, -17.4784],  // Mermoz VDN
        [14.7211, -17.4872],  // Ouakam
        [14.6960, -17.4680],  // Fann
        [14.6826, -17.4500],  // Médina
        [14.6868, -17.4420],  // Grand Dakar
        [14.7614, -17.4274],  // Parcelles
        [14.7640, -17.4050],  // Guédiawaye
        [14.7564, -17.3908],  // Pikine
        [14.7830, -17.3120],  // Keur Massar
        [14.6720, -17.4350],  // Retour Plateau
    ],

    // ── Checklist items ──
    checklist: [
        { label: 'Photo kilométrage du matin', checked: true },
        { label: 'Vérifier niveau d\'huile moteur', checked: true },
        { label: 'Vérifier pression des pneus', checked: true },
        { label: 'Tester les freins', checked: true },
        { label: 'Vérifier les phares et clignotants', checked: true },
        { label: 'Nettoyer l\'intérieur du véhicule', checked: false },
        { label: 'Capture d\'écran tableau Yango (fin de journée)', checked: false },
        { label: 'Photo kilométrage du soir', checked: false },
    ],
};

// ── Utility ──
function formatCFA(n) {
    return Math.abs(n).toLocaleString('fr-FR') + ' FCFA';
}

// ── Mobile menu ──
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (btn) {
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // Period selector
    document.querySelectorAll('.period-btn').forEach(b => {
        b.addEventListener('click', () => {
            document.querySelectorAll('.period-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
        });
    });

    // Nav active
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
