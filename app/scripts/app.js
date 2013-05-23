/********************************************************
 * App
 *
 * Triggers various inits.
 ********************************************************/

define(['map', 'popup', 'popup.test', 'menu', 'search'], function (mapFabric, popupFabric, popupTestFabric, menuFabric, searchFabric) {
  mapFabric.init();
  menuFabric.init();
  searchFabric.init();

  var popupData = popupTestFabric.test('popup1');
  popupFabric.open(popupData);


});