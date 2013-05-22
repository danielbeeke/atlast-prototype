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
            $('.fullscreen #popup-header').removeClass('has-hidden-content');
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
    },
    test: function(item) {
      if (!item) {
        item = 'popup1';
      }

      var templates = {
        popup1: {
          title: 'Information',
          icon: 'bullhorn',
          actions: {
            'favorite': {
              icon: 'star'
            },
            'note': {
              icon: 'pencil'
            }
          },
          classes: ['information'],
          description: 'Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu. Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu.'
        },
        popup2: {
          title: 'Information',
          fullscreen: true,
          icon: 'bullhorn',
          actions: {
            'favorite': {
              icon: 'star'
            },
            'note': {
              icon: 'pencil'
            }
          },
          classes: ['information'],
          description: 'Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu. Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu.'
        },
        popup3: {
          title: 'Information',
          fullscreen: true,
          icon: 'bullhorn',
          classes: ['information'],
          description: 'Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu. Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu.'
        },
        popup4: {
          title: 'Information',
          icon: 'bullhorn',
          classes: ['information'],
          description: 'Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu. Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu.'
        }
      }

      this.open(templates[item]);
    }
  }
});