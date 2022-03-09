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
        iconUrl: '../assets/img/arbreicon.png',
        iconSize: [32, 37], // taille de l'icone
        iconAnchor: [22, 34], // coords de la "pointe" de l'icone
    });

    /* Custom Popup */
    var customPopup = {'maxWidth': '110','className' : 'custom_popup'}

    /* Marker map */

    var marker_0 = L.marker([45.835229, 1.237753],{icon:marker_icon}).addTo(map);
    marker_0.bindPopup("<b>Marker 0</b><br>Hello World !");
    var marker_1 = L.marker([45.835240, 1.237853],{icon:marker_icon}).addTo(map);
    marker_1.bindPopup("<b>Marker 1</b><br>Hello World !");
    var marker_2 = L.marker([45.835250, 1.237953],{icon:marker_icon}).addTo(map);
    marker_2.bindPopup("<b>Marker 2</b><br>Hello World !");
    var marker_3 = L.marker([45.835260, 1.237153],{icon:marker_icon}).addTo(map);
    marker_3.bindPopup("<b>Marker 3</b><br>Hello World !");
    var marker_4 = L.marker([45.835270, 1.237253],{icon:marker_icon}).addTo(map);
    marker_4.bindPopup("<b>Marker 4</b><br>Hello World !");
    var marker_5 = L.marker([45.835280, 1.237353],{icon:marker_icon}).addTo(map);
    marker_5.bindPopup("<b>Marker 5</b><br>Hello World !");
    var marker_6 = L.marker([45.835290, 1.237453],{icon:marker_icon}).addTo(map);
    marker_6.bindPopup("<b>Marker 6</b><br>Hello World !");
    var marker_7 = L.marker([45.835300, 1.237553],{icon:marker_icon}).addTo(map);
    marker_7.bindPopup("<b>Marker 7</b><br>Hello World !");
    var marker_8 = L.marker([45.835310, 1.237653],{icon:marker_icon}).addTo(map);
    marker_8.bindPopup("<b>Marker 8</b><br>Hello World !");
    var marker_9 = L.marker([45.835320, 1.236753],{icon:marker_icon}).addTo(map);
    marker_9.bindPopup("<b>Marker 9</b><br>Hello World !");
    var marker_10 = L.marker([45.835330, 1.236553],{icon:marker_icon}).addTo(map);
    marker_10.bindPopup("<b>Marker 10</b><br>Hello World !");
    var marker_11 = L.marker([45.835340, 1.236453],{icon:marker_icon}).addTo(map);
    marker_11.bindPopup("<b>Marker 11</b><br>Hello World !");
    var marker_12 = L.marker([45.835350, 1.236353],{icon:marker_icon}).addTo(map);
    marker_12.bindPopup("<b>Marker 12</b><br>Hello World !");

    /* Marker 13 */
    var custom13 =
        "<img class='img_marker' src='../assets/img/arbre.png' alt='Image arbre'/>" +
        "<button type=\"button\" class=\"btn-trees btn btn-dark\">" +
            "<a href='http://localhost:8000/trees/1' target='_blank'>En savoir plus...</a>" +
        "</button>"

    var marker_13 = L.marker([45.835360, 1.236253],{icon:marker_icon}).addTo(map);
    marker_13.bindPopup(custom13, customPopup);



    /* ---- Menu Map ---- */



    L.control.layers({
        'Carte' : OpenStreetMap_Mapnik,
        'Satellite' : GeoportailFrance_orthos,
    }).addTo(map)



    /* Trails Map */
    /* var latlngs = [
        [45.835340, 1.236453],
        [45.835740, 1.236853],
        [45.836040, 1.237153]
    ];

    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
    map.fitBounds(polyline.getBounds()); */

});
