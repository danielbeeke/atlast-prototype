/********************************************************
 * App
 *
 * Triggers various inits.
 ********************************************************/

define(['splashscreen', 'map', 'popup', 'popup.test', 'menu', 'search'], function (splashFabric, mapFabric, popupFabric, popupTestFabric, menuFabric, searchFabric) {
  splashFabric.init();
  mapFabric.init();
  menuFabric.init();
  searchFabric.init();

  var popupData = popupTestFabric.test('popup1');
  popupFabric.open(popupData);


});