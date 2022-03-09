$(document).ready(function(){
    /* ---- Map ---- */

    var map = L.map('map').setView([45.835228, 1.237753], 17.4);

    var GeoportailFrance_orthos = L.tileLayer('https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
        attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
        bounds: [[-75, -180], [81, 180]],
        minZoom: 6,
        maxZoom: 19,
        apikey: 'choisirgeoportail',
        format: 'image/jpeg',
        style: 'normal'
    });

    var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    OpenStreetMap_Mapnik.addTo(map
    )


    /* Custom Marker */
    var marker_icon = L.icon({
        iconUrl: '../assets/img/arbre.png',
        iconSize: [62, 67], // taille de l'icone
        iconAnchor: [22, 34], // coords de la "pointe" de l'icone
    });

    /* Custom Popup */
    var customPopup = {'maxWidth': '110','className' : 'custom_popup'}

    /* Marker map */

    var marker_0 = L.marker([45.835811, 1.237481],{icon:marker_icon}).addTo(map);
    marker_0.bindPopup("<b>Marker 0</b><br>Hello World !");
    var marker_1 = L.marker([45.836115, 1.236019],{icon:marker_icon}).addTo(map);
    marker_1.bindPopup("<b>Marker 1</b><br>Hello World !");
    var marker_2 = L.marker([45.837214, 1.235664],{icon:marker_icon}).addTo(map);
    marker_2.bindPopup("<b>Marker 2</b><br>Hello World !");
    var marker_3 = L.marker([45.836623, 1.234835],{icon:marker_icon}).addTo(map);
    marker_3.bindPopup("<b>Marker 3</b><br>Hello World !");
    var marker_4 = L.marker([45.835469, 1.235418],{icon:marker_icon}).addTo(map);
    marker_4.bindPopup("<b>Marker 4</b><br>Hello World !");
    var marker_5 = L.marker([45.835108, 1.236526],{icon:marker_icon}).addTo(map);
    marker_5.bindPopup("<b>Marker 5</b><br>Hello World !");
    var marker_6 = L.marker([45.835273, 1.237122],{icon:marker_icon}).addTo(map);
    marker_6.bindPopup("<b>Marker 6</b><br>Hello World !");
    var marker_7 = L.marker([45.834652, 1.238561],{icon:marker_icon}).addTo(map);
    marker_7.bindPopup("<b>Marker 7</b><br>Hello World !");
    var marker_8 = L.marker([45.834374, 1.242053],{icon:marker_icon}).addTo(map);
    marker_8.bindPopup("<b>Marker 8</b><br>Hello World !");
    var marker_9 = L.marker([45.834145, 1.242884],{icon:marker_icon}).addTo(map);
    marker_9.bindPopup("<b>Marker 9</b><br>Hello World !");
    var marker_10 = L.marker([45.834314, 1.243802],{icon:marker_icon}).addTo(map);
    marker_10.bindPopup("<b>Marker 10</b><br>Hello World !");
    var marker_11 = L.marker([45.834225, 1.244229],{icon:marker_icon}).addTo(map);
    marker_11.bindPopup("<b>Marker 11</b><br>Hello World !");
    var marker_12 = L.marker([45.834391, 1.242701],{icon:marker_icon}).addTo(map);
    marker_12.bindPopup("<b>Marker 12</b><br>Hello World !");

    /* Marker 13 */
    var custom13 =
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type=\"button\" class=\"btn-trees btn btn-dark\">" +
            "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"

    var marker_13 = L.marker([45.835253, 1.238959],{icon:marker_icon}).addTo(map);
    marker_13.bindPopup(custom13, customPopup);


    var points = [
        [45.836249,1.236026],
        [45.836339,1.235957],
        [45.836529,1.235946],
        [45.836642,1.23594],
        [45.83675,1.235989],
        [45.836873,1.236048],
        [45.837019,1.236155],
        [45.837146,1.236257],
        [45.837277,1.236391],
        [45.837258,1.23616],
        [45.837116,1.235849],
        [45.836962,1.235468],
        [45.836768,1.234835],
        [45.836671,1.234755],
        [45.836596,1.234712],
        [45.836398,1.234932],
        [45.836305,1.235147],
        [45.83626,1.235281],
        [45.836152,1.235554],
        [45.836029,1.235581],
        [45.835872,1.235613],
        [45.835771,1.23564],
        [45.8356,1.235777],
        [45.835447,1.235747],
        [45.835573,1.235865],
        [45.83558,1.236037],
        [45.835547,1.236219],
        [45.835427,1.236423],
        [45.835359,1.23663],
        [45.835367,1.236777],
        [45.835259,1.236954],
        [45.835199,1.237083],
        [45.835262,1.237298],
        [45.835319,1.237502],
        [45.835281,1.237754],
        [45.835225,1.237893],
        [45.83518,1.238124],
        [45.835035,1.238285],
        [45.834937,1.238451],
        [45.834862,1.23862],
        [45.83475,1.238666],
        [45.834855,1.238859],
        [45.8349,1.238955],
        [45.834889,1.239127],
        [45.834814,1.239229],
        [45.834762,1.239379],
        [45.834717,1.239588],
        [45.834638,1.239637],
        [45.83461,1.239655],
        [45.834568,1.239688],
        [45.834636,1.239696],
        [45.834628,1.239878],
        [45.834673,1.240117],
        [45.834683,1.240495],
        [45.834631,1.240717],
        [45.834604,1.240846],
        [45.834591,1.241037],
        [45.834552,1.241152],
        [45.834472,1.241302],
        [45.834425,1.24153],
        [45.834336,1.241847],
        [45.834265,1.242201],
        [45.834209,1.242576],
        [45.834102,1.242769],
        [45.834111,1.243131],
        [45.834141,1.243483],
        [45.83424,1.243587],
        [45.834277,1.243663],
        [45.834271,1.243783],
        [45.834172,1.244097],
        [45.834234,1.244078],
        [45.834367,1.243944],
        [45.834492,1.243789],
        [45.834582,1.243633],
        [45.834612,1.243472],
        [45.834539,1.243325],
        [45.834492,1.243225],
        [45.83443,1.242906],
        [45.834475,1.242815],
        [45.834514,1.242726],
        [45.83452,1.242533],
        [45.834456,1.242152],
        [45.834383,1.241699],
        [45.834486,1.24131],
        [45.834574,1.241136],
        [45.834612,1.241039],
        [45.834623,1.240835],
        [45.834662,1.240669],
        [45.834702,1.240492],
        [45.834705,1.24043],
        [45.834789,1.240406],
        [45.834911,1.240489],
        [45.834978,1.240202],
        [45.835021,1.239929],
        [45.835064,1.239653],
        [45.835156,1.23935],
        [45.835229,1.239175],
        [45.835253,1.238856],
        [45.835438,1.238719],
        [45.835516,1.238582],
        [45.835707,1.238416],
        [45.835742,1.238156],
        [45.835748,1.237904],
        [45.835784,1.237566],
        [45.835841,1.237064],
        [45.835907,1.236641],
        [45.835982,1.23634],
        [45.836107,1.236144],
        [45.836228,1.236034],
    ];
    var trail = L.polyline(points, {
        color: 'red',
        weight: 4,
        opacity: 0.5,
        smoothFactor: 1
    }).addTo(map);

    /* ---- Menu Map ---- */



    L.control.layers({
        'Carte' : OpenStreetMap_Mapnik,
        'Satellite' : GeoportailFrance_orthos,
    },{
        'Parcours' : trail,
    }).addTo(map)




});
