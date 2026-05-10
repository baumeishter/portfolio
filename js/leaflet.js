
var map = L.map('map').setView([51.0280, 4.4833], 14);

var pin = L.icon({
    iconUrl: './assets/pin.png',

    iconSize: [15, 27],
    iconAnchor: [5, 7],
    popupAnchor: [3.2, 4]
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.02687162311254, 4.481717425426787], {icon: pin}).addTo(map)
    .bindPopup('<b>MAANROCK: DE SPEELPLAATS<br>SOUND OF THE UNDERGROUND</b><br>BOTERMARKT');

var marker = L.marker([51.02495886952736, 4.49308102239412], {icon: pin}).addTo(map)
    .bindPopup('<b>5 YEARS SAFEHOUSE</b><br>DE CLUB');

var marker = L.marker([51.02655737156902, 4.479868374036146], {icon: pin}).addTo(map)
    .bindPopup('<b>DE NACHTWINKEL</b><br>SMATCH SUPERMARKT');

var marker = L.marker([51.032867170191444, 4.471361308203075], {icon: pin}).addTo(map)
    .bindPopup('<b>10 YEARS NIGHTVISION<br>KRAPUUL</b><br>AWAREHOUSE');
    
var marker = L.marker([51.02871372908477, 4.477017763811841], {icon: pin}).addTo(map)
    .bindPopup('<b>MALINES ARRIVE</b><br>CULTUURPLEIN / KUUB');

var marker = L.marker([51.01822456584433, 4.482107427106693], {icon: pin}).addTo(map)
    .bindPopup('<b>015 MECHELEN</b><br>015 MECHELEN');

var marker = L.marker([51.013062782673444, 4.483491943255783], {icon: pin}).addTo(map)
    .bindPopup('<b>EGO DEATH</b><br>T KRANSKE');

var marker = L.marker([51.02472449940096, 4.488135747770382], {icon: pin}).addTo(map)
    .bindPopup('<b>CLUB DWAAS</b><br>DE PLANEET');
