/********************************************************
 * Popup
 *
 * Handles popup requests.
 ********************************************************/

define(['jquery', 'twigloader'], function ($, twigFabric) {
  return {
    open: function(render) {

      // Adding a classes array if not present.
      if (!render['classes']) { render['classes'] = []; }

      // If fullscreen add the class.
      if (render.fullscreen) {
        render['classes'].push('fullscreen');
      }

      // Render the new popup via twig.
      var newPopup = twigFabric.render('popup', render);

      // Replace the old popup.
      if ($('#popup').length) {

      }

      // Init the popup.
      else {
        $('#main').prepend(newPopup);
      }

    }
  }
});