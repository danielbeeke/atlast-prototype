/********************************************************
 * App
 *
 * Triggers various inits.
 ********************************************************/

define(['splashscreen', 'map', 'popup', 'popup.test', 'menu', 'search', 'settings', 'favorites', 'facebook', 'throbber'], function (splashFabric, mapFabric, popupFabric, popupTestFabric, menuFabric, searchFabric, settingsFabric, filtersFabric, facebookFabric, throbberFabric) {

  // We need the settings for each plguin to work.
  settingsFabric.init(function() {
    splashFabric.init();
    mapFabric.init();
    menuFabric.init();
    searchFabric.init();
    facebookFabric.init();

    // var popupData = popupTestFabric.test('popup1');
    // popupFabric.open(popupData);
  });

});