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

      // Add the style class.
      if (render.fullscreen) {
        render['classes'].push('fullscreen');
      }
      else {
        render['classes'].push('with-teaser');
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

      // Control functions.
      $('#popup').scroll(function () {

        if($(this).scrollTop() == 0) {
          $('#popup-header').removeClass('has-hidden-content');
          if ($('#popup').height() < $('#popup-content').height()) {
            $('#popup-footer').addClass('has-hidden-content');
          }
        } else if ($('#popup')[0].scrollHeight - $('#popup').height() == $('#popup').scrollTop()) {
          $('#popup-footer').removeClass('has-hidden-content');
          if ($('#popup').height() < $('#popup-content').height()) {
            $('#popup-header').addClass('has-hidden-content');
          }
        } else {
          $('#popup-header, #popup-footer').addClass('has-hidden-content');
        }
      });

      // Init the has-hiddden content classes.
      $('#popup').scroll();
    }
  }
});