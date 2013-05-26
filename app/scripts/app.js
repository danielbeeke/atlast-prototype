/********************************************************
 * App
 *
 * Triggers various inits.
 ********************************************************/

define(['splashscreen', 'map', 'popup', 'popup.test', 'menu', 'search', 'settings'], function (splashFabric, mapFabric, popupFabric, popupTestFabric, menuFabric, searchFabric, settingsFabric) {

  // We need the settings for each plguin to work.
  settingsFabric.init(function() {
    splashFabric.init();
    mapFabric.init();
    menuFabric.init();
    searchFabric.init();
  });

  // var popupData = popupTestFabric.test('popup1');
  // popupFabric.open(popupData);


});