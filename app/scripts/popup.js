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
        render['classes'].push('with-sticky-header');
      }
      else {
        render['classes'].push('with-teaser');
      }

      if (render.actions) {
        render['classes'].push('with-actions');
      }
      else {
        render['classes'].push('no-actions');
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

      var visibleHeightOfMap = $('#popup').height() - $('#popup-header').outerHeight() - $('.with-actions #popup-footer').outerHeight();

      if ($('#popup-wrapper').hasClass('with-teaser')) {
        $('#popup-header').css('margin-top', visibleHeightOfMap + 2);
      }

      // Control functions.
      $('#popup').scroll(function () {

        // Adds the class with-sticky-header, it is always added for fullscreen.
        if ($('#popup-wrapper.with-teaser').length) {
          if ($(this).scrollTop() > visibleHeightOfMap + 2) {
            $('#popup-wrapper').addClass('with-sticky-header');
            $('#popup-content').css('padding-top', visibleHeightOfMap + 12);
          } else {
            $('#popup-wrapper').removeClass('with-sticky-header');
            $('#popup-content').css('padding-top', 10);
          }
        }

        // Toggles has-hidden-content classes.
        // TODO find out why it does not seem to work for wider screens.
        if ($('#popup').height() + visibleHeightOfMap < $('#popup-content').height()) {
          if($(this).scrollTop() == 0) {
            $('#popup-header').removeClass('has-hidden-content');
            $('#popup-footer').addClass('has-hidden-content');
          } else if ($('#popup')[0].scrollHeight - $('#popup').height() == $('#popup').scrollTop()) {
            $('#popup-footer').removeClass('has-hidden-content');
            $('#popup-header').addClass('has-hidden-content');
          } else {
            $('#popup-header, #popup-footer').addClass('has-hidden-content');
          }
        }
        else {
          $('#popup-header, #popup-footer').removeClass('has-hidden-content');
        }
      });

      $(window).resize(function() {
        // Attach classes on resize, this is just fancy pantsy!
        $('#popup').scroll();
      });

      // Init the has-hiddden content classes.
      $('#popup').scroll();
    }
  }
});