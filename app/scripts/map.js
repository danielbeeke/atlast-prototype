/********************************************************
 * Map
 *
 * Loads the map onto the body.
 ********************************************************/

define(['jquery', 'leaflet', 'settings', 'awesomeMarkers', 'popup'], function ($, leaflet, settingsFabric, awesomeMarkersFabric, popupFabric) {
  var icons = {};
  var markers = {};

  var mapFabric = {
    init: function() {

      // create a map in the "map" div, set the view to a given place and zoom
      var map = L.map('map', {
        attributionControl: false,
        zoomControl: false,
        scrollWheelZoom: false,
      }).setView([51.505, -0.09], 13);

      // Add the map via the settings.
      L.tileLayer(settingsFabric.mapPath).addTo(map);

      $.getJSON(settingsFabric.api + '/map_locations/' + settingsFabric.instanceId, null, function(json) {

        var featureGroup = new L.featureGroup();

        $.each(json.items, function(index, item) {

          // If the needed icon doesnt exist, create it.
          if (!icons[item.icon + '-' + item.color]) {
            icons[item.icon + '-' + item.color] = L.AwesomeMarkers.icon({
              icon: item.icon,
              color: item.color
            });
          }

          // Map the map_location ids to a array so we can call on them later on.
          markers[item.id] = L.geoJson(item.geojson, {
            pointToLayer: function (feature, latlng) {
              var marker = L.marker(latlng, {icon: icons[item.icon + '-' + item.color], id: item.id});

              $.each(item.filters, function(index, filter) {
                marker.options.icon.options.className = marker.options.icon.options.className + ' filter-' + filter;
              });

              return marker;
            }
          }).addTo(featureGroup);

          markers[item.id]._leaflet_id = item.id;

          markers[item.id].on('click', onMarkerClick);

        });

        featureGroup.addTo(map);

        map.fitBounds(featureGroup.getBounds());
        $('body').trigger('loadingProgress', ['map']);
      });

      // Click action of a marker.
      function onMarkerClick(event) {
        var markerId = event.layer._leaflet_id;

        // Getting the menu items.
        $.getJSON(settingsFabric.api + '/map_location/' + markerId, null, function(json) {
          popupFabric.open(json);
        });

      }

    }
  }

  return mapFabric;
});