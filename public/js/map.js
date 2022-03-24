$(document).ready(function(){
    /* ---- Map ---- */

    var map = L.map('map').setView([45.835228, 1.237753], 17.4);

    var GeoportailFrance_orthos = L.tileLayer('https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
        attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
        minZoom: 12,
        maxZoom: 19,
        apikey: 'choisirgeoportail',
        format: 'image/jpeg',
        style: 'normal'
    });

    var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 12,
        maxZoom: 19,
    });

    OpenStreetMap_Mapnik.addTo(map);


    /* Custom Marker Trees */
    var marker_trees = L.icon({
        iconUrl: '../assets/img/arbre_icon.png',
        iconSize: [62, 67], // taille de l'icone
        iconAnchor: [31, 33], // coords de la "pointe" de l'icone
    });

    /* Custom Marker Parking */
    var marker_parking = L.icon({
        iconUrl: '../assets/img/icon_parking.png',
        iconSize: [42, 47], // taille de l'icone
        iconAnchor: [21, 23], // coords de la "pointe" de l'icone
    });

    /* Custom Marker Birds */
    var marker_birds = L.icon({
        iconUrl: '../assets/img/bird_icon.png',
        iconSize: [62, 67], // taille de l'icone
        iconAnchor: [21, 23], // coords de la "pointe" de l'icone
    });

    /* Custom Popup */
    var customPopup = {'minWidth': '550','className' : 'custom_popup'}

    /* ----- Marker trees map ----- */

    /* Marker 0 */
    var custom0 =
        "<div class='div_marker'>"+
        "<h3>Marker 0</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_0 = L.marker([45.835811, 1.237481],{icon:marker_trees}).addTo(map);
    marker_0.bindPopup(custom0, customPopup);

    /* Marker 1 */
    var custom1 =
        "<div class='div_marker'>"+
        "<h3>Marker 1</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_1 = L.marker([45.836115, 1.236019],{icon:marker_trees}).addTo(map);
    marker_1.bindPopup(custom1, customPopup);

    /* Marker 2 */
    var custom2 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_2 = L.marker([45.837214, 1.235664],{icon:marker_trees}).addTo(map);
    marker_2.bindPopup(custom2, customPopup);

    /* Marker 3 */
    var custom3 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_3 = L.marker([45.836623, 1.234835],{icon:marker_trees}).addTo(map);
    marker_3.bindPopup(custom3, customPopup);

    /* Marker 4 */
    var custom4 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_4 = L.marker([45.835469, 1.235418],{icon:marker_trees}).addTo(map);
    marker_4.bindPopup(custom4, customPopup);

    /* Marker 5 */
    var custom5 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_5 = L.marker([45.835108, 1.236526],{icon:marker_trees}).addTo(map);
    marker_5.bindPopup(custom5, customPopup);

    /* Marker 6 */
    var custom6 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_6 = L.marker([45.835273, 1.237122],{icon:marker_trees}).addTo(map);
    marker_6.bindPopup(custom6, customPopup);

    /* Marker 7 */
    var custom7 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_7 = L.marker([45.834652, 1.238561],{icon:marker_trees}).addTo(map);
    marker_7.bindPopup(custom7, customPopup);

    /* Marker 8 */
    var custom8 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_8 = L.marker([45.834374, 1.242053],{icon:marker_trees}).addTo(map);
    marker_8.bindPopup(custom8, customPopup);

    /* Marker 9 */
    var custom9 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_9 = L.marker([45.834145, 1.242884],{icon:marker_trees}).addTo(map);
    marker_9.bindPopup(custom9, customPopup);

    /* Marker 10 */
    var custom10 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_10 = L.marker([45.834314, 1.243802],{icon:marker_trees}).addTo(map);
    marker_10.bindPopup(custom10, customPopup);

    /* Marker 11 */
    var custom11 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_11 = L.marker([45.834225, 1.244229],{icon:marker_trees}).addTo(map);
    marker_11.bindPopup(custom11, customPopup);

    /* Marker 12 */
    var custom12 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_12 = L.marker([45.834391, 1.242701],{icon:marker_trees}).addTo(map);
    marker_12.bindPopup(custom12, customPopup);

    /* Marker 13 */
    var custom13 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_13 = L.marker([45.835253, 1.238959],{icon:marker_trees}).addTo(map);
    marker_13.bindPopup(custom13, customPopup);


    /* Marker birds map */
    /* Marker 0 */
    var custom_bird_0 =
        "<div class='div_marker'>"+
        "<h3>Mésange charbonnière</h3>"+
        "<img class='img_marker' src='../assets/img/birds/Mesange-charbonniere.jpg' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/animals/2' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_0 = L.marker([45.838660, 1.234474],{icon:marker_birds}).addTo(map);
    marker_bird_0.bindPopup(custom_bird_0, customPopup);

    /* Marker 1 */
    var custom_bird_1 =
        "<div class='div_marker'>"+
        "<h3>Mésanges bleue</h3>"+
        "<img class='img_marker' src='../assets/img/birds/Mesange_bleue.jpg' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/animals/5' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_1 = L.marker([45.837954, 1.232736],{icon:marker_birds}).addTo(map);
    marker_bird_1.bindPopup(custom_bird_1, customPopup);

    /* Marker 2 */
    var custom_bird_2 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/bird_icon.png' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_2 = L.marker([45.836186, 1.232371],{icon:marker_birds}).addTo(map);
    marker_bird_2.bindPopup(custom_bird_2, customPopup);

    /* Marker 3 */
    var custom_bird_3 =
        "<div class='div_marker'>"+
        "<h3>Pic épeiche</h3>"+
        "<img class='img_marker' src='../assets/img/birds/Pic_epeiche M.jpg' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/animals/9' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_3 = L.marker([45.835198, 1.234785],{icon:marker_birds}).addTo(map);
    marker_bird_3.bindPopup(custom_bird_3, customPopup);

    /* Marker 4 */
    var custom_bird_4 =
        "<div class='div_marker'>"+
        "<h3>Pinson des arbres</h3>"+
        "<img class='img_marker' src='../assets/img/birds/Pinson_des_arbres F.jpg' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/animals/6' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_4 = L.marker([45.834661, 1.240384],{icon:marker_birds}).addTo(map);
    marker_bird_4.bindPopup(custom_bird_4, customPopup);

    /* Marker 5 */
    var custom_bird_5 =
        "<div class='div_marker'>"+
        "<h3>Merle noir</h3>"+
        "<img class='img_marker' src='../assets/img/birds/Merle_noir_M.jpg' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/animals/7' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_5 = L.marker([45.834376, 1.243417],{icon:marker_birds}).addTo(map);
    marker_bird_5.bindPopup(custom_bird_5, customPopup);

    /* Marker 6 */
    var custom_bird_6 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/bird_icon.png' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_6 = L.marker([45.835531, 1.241751],{icon:marker_birds}).addTo(map);
    marker_bird_6.bindPopup(custom_bird_6, customPopup);

    /* Marker 7 */
    var custom_bird_7 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/bird_icon.png' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_7 = L.marker([45.835793, 1.238964],{icon:marker_birds}).addTo(map);
    marker_bird_7.bindPopup(custom_bird_7, customPopup);

    /* Marker 8 */
    var custom_bird_8 =
        "<div class='div_marker'>"+
        "<h3>Pic vert</h3>"+
        "<img class='img_marker' src='../assets/img/birds/Pic_vert.jpg' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/animals/8' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_8 = L.marker([45.836212, 1.236158],{icon:marker_birds}).addTo(map);
    marker_bird_8.bindPopup(custom_bird_8, customPopup);

    /* Marker 9 */
    var custom_bird_9 =
        "<div class='div_marker'>"+
        "<h3>Marker 13</h3>"+
        "<img class='img_marker' src='../assets/img/bird_icon.png' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_9 = L.marker([45.838080, 1.235173],{icon:marker_birds}).addTo(map);
    marker_bird_9.bindPopup(custom_bird_9, customPopup);

    /* Marker 10 */
    var custom_bird_10 =
        "<div class='div_marker'>"+
        "<h3>Bergeronnette grise</h3>"+
        "<img class='img_marker' src='../assets/img/birds/Bergeronnette_grise.jpg' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/animals/11' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_10 = L.marker([45.838116, 1.236647],{icon:marker_birds}).addTo(map);
    marker_bird_10.bindPopup(custom_bird_10, customPopup);

    /* Marker 11 */
    var custom_bird_11 =
        "<div class='div_marker'>"+
        "<h3>Pigeons biset</h3>"+
        "<img class='img_marker' src='../assets/img/birds/Pigeon_biset.jpg' alt='Image oiseau'/>" +
        "<button type='button' class='btn_marker btn-dark btn-lg btn-block'>" +
        "<a href='http://localhost:8000/animals/10' target='_blank'>En savoir plus...</a>" +
        "</button>"+
        "</div>"

    var marker_bird_11 = L.marker([45.838136, 1.238206],{icon:marker_birds}).addTo(map);
    marker_bird_11.bindPopup(custom_bird_11, customPopup);




    /* ---- Trails ---- */

    /* Trail trees */
    var points_trees = [
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
    var trail_trees = L.polyline(points_trees, {
        color: 'red',
        weight: 4,
        opacity: 0.5,
        smoothFactor: 1
    }).addTo(map);

    /* Trail birds */

    var points_birds = [
        [45.839482,1.236026],
        [45.83956,1.235415],
        [45.83956,1.234873],
        [45.839456,1.234524],
        [45.839232,1.234149],
        [45.838499,1.233049],
        [45.837957,1.232266],
        [45.837318,1.231166],
        [45.83678,1.230678],
        [45.835524,1.229691],
        [45.83459,1.228854],
        [45.834489,1.229224],
        [45.834777,1.230072],
        [45.834975,1.230989],
        [45.835087,1.23181],
        [45.835106,1.232759],
        [45.83499,1.234294],
        [45.834892,1.235318],
        [45.834769,1.236584],
        [45.834623,1.23814],
        [45.83447,1.239443],
        [45.834272,1.241117],
        [45.834074,1.242662],
        [45.833924,1.24403],
        [45.83425,1.24447],
        [45.834986,1.243129],
        [45.835625,1.243933],
        [45.836369,1.242598],
        [45.835748,1.241922],
        [45.836066,1.240844],
        [45.83666,1.239937],
        [45.837142,1.240667],
        [45.837636,1.239808],
        [45.838144,1.238784],
        [45.838906,1.237341],
        [45.839377,1.236386],
        [45.839481,1.236021]
    ];
    var trail_birds = L.polygon(points_birds,{
        color: 'purple',
        weight: 4,
        opacity: 0.3,
        smoothFactor: 1
    }).addTo(map);


    /* ---- Menu Map ---- */

    L.control.layers({
            'Carte' : OpenStreetMap_Mapnik,
            'Satellite' : GeoportailFrance_orthos,
            },{
            'Parcours des arbres' : trail_trees,
            'Zone des oiseaux' : trail_birds,
            }).addTo(map);

});
