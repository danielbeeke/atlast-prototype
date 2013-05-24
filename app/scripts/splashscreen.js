/********************************************************
 * Splash screen
 *
 * Shows loading progress in a splash screen.
 ********************************************************/

define(['jquery'], function ($) {
  return {
    init: function() {

      var total = 4;
      var loadedItems = 0;

      $('body').on('loadingProgress', function(event, item) {
        loadedItems = loadedItems + 1;

        if (loadedItems == total) {
          $('#splash').fadeOut('slow', function() {
            $('#splash').remove();
          });
        }
      });

    }
  }
});