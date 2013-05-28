/********************************************************
 * App
 *
 * Triggers various inits.
 ********************************************************/

define(['splashscreen', 'map', 'popup', 'menu', 'search', 'settings', 'favorites', 'facebook', 'throbber', 'emblems'],
  function (splashFabric, mapFabric, popupFabric, menuFabric, searchFabric, settingsFabric, filtersFabric, facebookFabric, throbberFabric, emblemsFabric) {

  // We need the settings for each plugin to work.
  settingsFabric.init(function() {
    facebookFabric.init(function() {
      splashFabric.init();
      mapFabric.init();
      menuFabric.init();
      searchFabric.init();
    });
  });

});