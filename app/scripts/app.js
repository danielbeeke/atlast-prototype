/********************************************************
 * App
 *
 * Triggers various inits.
 ********************************************************/

define(['map', 'popup', 'menu'], function (mapFabric, popupFabric, menuFabric) {
  mapFabric.init();
  menuFabric.init();

  popupFabric.test('popup1');
});