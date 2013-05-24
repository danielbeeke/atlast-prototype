/********************************************************
 * Map
 *
 * Loads the map onto the body.
 ********************************************************/

define(['jquery', 'leaflet', 'settings', 'awesomeMarkers'], function ($, leaflet, settingsFabric, awesomeMarkersFabric) {
  var markers = {};

  return {
    init: function() {

      // create a map in the "map" div, set the view to a given place and zoom
      var map = L.map('map', {
        attributionControl: false,
        zoomControl: false
      }).setView([51.505, -0.09], 13);

      // add an OpenStreetMap tile layer
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      $.getJSON(settingsFabric.api + '/map_locations/' + settingsFabric.instanceId, null, function(json) {

        var featureGroup = new L.featureGroup();

        $.each(json.items, function(index, item) {

          if (!markers[item.icon + '-' + item.color]) {
            markers[item.icon + '-' + item.color] = L.AwesomeMarkers.icon({
              icon: item.icon,
              color: item.color
            });
          }

          L.geoJson(item.geojson, {
            pointToLayer: function (feature, latlng) {
              return L.marker(latlng, {icon: markers[item.icon + '-' + item.color]})
            },
            // onEachFeature: function (feature, layer) {
            //   layer.bindPopup(item.label);
            // }
          }).addTo(featureGroup);

        });

        featureGroup.addTo(map);

        map.fitBounds(featureGroup.getBounds());
        $('body').trigger('loadingProgress', ['map']);
      });

    }
  }
});