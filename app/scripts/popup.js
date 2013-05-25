/********************************************************
 * Popup
 *
 * Handles popup requests.
 ********************************************************/

define(['jquery', 'twigloader', 'scrollTo', 'easing'], function ($, twigFabric, scrollToFabric, easingFabric) {
  var popupFabric = {
    open: function(render) {

/********************************************************
 * Prepare
 ********************************************************/

      // Adding a classes array if not present.
      if (!render['classes']) { render['classes'] = []; }

      // Add the style class.
      if (render.fullscreen) {
        render['classes'].push('fullscreen');
        render['classes'].push('with-sticky-header');
      } else {
        render['classes'].push('with-teaser');
      }

      if (render.actions) {
        render['classes'].push('with-actions');
      } else {
        render['classes'].push('no-actions');
      }

/********************************************************
 * Render
 ********************************************************/

      // Render the new popup via twig.
      var newPopup = twigFabric.render('popup', render);

      // Replace the old popup.
      if ($('#popup').length) {
        $('#popup').fadeOut(function () {
          $('#popup').remove();

          $('#main').append(newPopup);
        });
      }

      // Init the popup.
      else {
        $('#main').append(newPopup);
      }

/********************************************************
 * Functions to create the visual interaction
 ********************************************************/

      var visibleHeightOfMap;

      $(window).resize(function() {
        visibleHeightOfMap = $('#popup').height() - $('#popup-header').outerHeight() - $('.with-actions #popup-footer').outerHeight();

        if ($('#popup-wrapper').hasClass('with-teaser')) {
          $('#popup-header').css('margin-top', visibleHeightOfMap + 2);
        }

        // Attach classes on resize, this is just fancy pantsy!
        $('#popup').scroll();
        $('#popup-content, #popup-header').css('width', $(window).width());
      });

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
        if($(this).scrollTop() == 0) {
          $('.fullscreen #popup-header').removeClass('has-hidden-content');
          $('#popup-footer').addClass('has-hidden-content');
        } else if ($('#popup')[0].scrollHeight - $('#popup').height() == $('#popup').scrollTop()) {
          $('#popup-footer').removeClass('has-hidden-content');
          $('#popup-header').addClass('has-hidden-content');
        } else {
          $('#popup-header, #popup-footer').addClass('has-hidden-content');
        }
      });

      // Init the has-hiddden content classes.
      $('#popup').scroll();
      $(window).resize();

/********************************************************
 * Functions triggers etc
 ********************************************************/

      $('#popup-close-button').click(function(event) {
        popupFabric.close();
      });

      $$('#popup').swipeUp(function(event) {
        console.log(event)

        var force = event.iniTouch.y - event.currentTouch.y;

        $('#popup').scrollTo('+=' + force * 2 + 'px', 300);
      });

      $$('#popup').swipeDown(function(event) {
        var force = event.currentTouch.y - event.iniTouch.y;

        $('#popup').scrollTo('-=' + force * 2 + 'px', 300);
      });


    },
    close: function() {
      $('#popup-wrapper').addClass('before-closing');
      setTimeout(function() {
        $('#popup-wrapper').remove();
      }, 700);
    }
  }

  return popupFabric;
});




