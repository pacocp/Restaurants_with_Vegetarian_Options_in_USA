var map = L.map( 'map', {
  center: [40.971165, -130.696938],
  minZoom: 2,
  zoom: 3
});
 
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );
 
var myURL = jQuery( 'script[src$="index.js"]' ).attr( 'src' ).replace( 'index.js', '' );
var myIcon = L.icon({
  iconUrl: myURL + '../img/pin24.png',
  iconRetinaUrl: myURL + '../img/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();
 
for ( var i = 0; i < markers.length; ++i )
{
  var popup = '<a>' +  markers[i].name +
              '<br/<b>Address: </b>' + markers[i].address +
              '<br/><b>Categories:</b> ' + markers[i].categories + '</a>';

  var m = L.marker( [markers[i].lat, markers[i].long], {icon: myIcon} )
                  .bindPopup( popup );
  
  markerClusters.addLayer(m).addTo(map);
}

map.addLayer( markerClusters );