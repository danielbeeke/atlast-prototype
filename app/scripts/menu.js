/********************************************************
 * Menu
 *
 * Provides slide menus.
 ********************************************************/

define(['jquery', 'twigloader'], function ($, twigFabric) {
  return {
    init: function() {

/********************************************************
 * Prepare
 ********************************************************/

      var menuData = {
        menuItems: {
          about: {
            icon: 'info',
            label: 'About',
            href: '#'
          },
          settings: {
            icon: 'rocket',
            label: 'Woop woop',
            href: '#'
          },
          dummy: {
            icon: 'anchor',
            label: 'How to use',
            href: '#'
          },
          lorem: {
            icon: 'asterisk',
            label: 'New things in town',
            href: '#'
          },
          ipsum: {
            icon: 'check-sign',
            label: 'How to get this started?',
            href: '#'
          },
          about1: {
            icon: 'info',
            label: 'About',
            href: '#'
          },
          settings1: {
            icon: 'rocket',
            label: 'Woop woop',
            href: '#'
          },
          dummy1: {
            icon: 'anchor',
            label: 'How to use',
            href: '#'
          },
          lorem1: {
            icon: 'asterisk',
            label: 'New things in town',
            href: '#'
          },
          ipsum1: {
            icon: 'check-sign',
            label: 'How to get this started?',
            href: '#'
          },
          about2: {
            icon: 'info',
            label: 'About',
            href: '#'
          },
          settings2: {
            icon: 'rocket',
            label: 'Woop woop',
            href: '#'
          },
          dummy2: {
            icon: 'anchor',
            label: 'How to use',
            href: '#'
          },
          lorem2: {
            icon: 'asterisk',
            label: 'New things in town',
            href: '#'
          },
          ipsum2: {
            icon: 'check-sign',
            label: 'How to get this started?',
            href: '#'
          },
        },
        filterItems: {
          about: {
            icon: 'info',
            label: 'About',
            href: '#'
          },
          settings: {
            icon: 'rocket',
            label: 'Woop woop',
            href: '#'
          },
          dummy: {
            icon: 'anchor',
            label: 'How to use',
            href: '#'
          },
          lorem: {
            icon: 'asterisk',
            label: 'New things in town',
            href: '#'
          },
          ipsum: {
            icon: 'check-sign',
            label: 'How to get this started?',
            href: '#'
          },
        }
      };

/********************************************************
 * Render
 ********************************************************/

      var menuMarkup = twigFabric.render('menu', menuData);

      $('#main').prepend(menuMarkup);

      // Control functions.
      $('.menu').scroll(function () {

        var visibleHeightOfMenu = $(this).height();

        if ($(this).height() + visibleHeightOfMenu < $('ul', this).height()) {
          if($(this).scrollTop() == 0) {
            $('.top-shadow').addClass('has-hidden-content');
          } else if ($(this)[0].scrollHeight - $('ul', this).height() == $(this).scrollTop()) {
            $('.bottom-shadow').removeClass('has-hidden-content');
            $('.top-shadow').addClass('has-hidden-content');
          } else {
            $('.top-shadow, .bottom-shadow').addClass('has-hidden-content');
          }
        }
        else {
          $('.top-shadow, .bottom-shadow').removeClass('has-hidden-content');
        }
      });

      $(window).resize(function() {
        $('.menu ul').css('max-height', $(window).height() - 88);
      });

      $(window).resize();

/********************************************************
 * Touch functions
 ********************************************************/


      $('.close-button, .trigger-menu').click(function () {
        $(this).parent().toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      // Filter menu swipes
      $$('#trigger-menu-filters').swipeLeft(function(event) {
        $('#menu-filters').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      $$('#menu-filters').swipeRight(function(event) {
        $('#menu-filters').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      // Main menu swipes
      $$('#trigger-menu-main').swipeRight(function(event) {
        $('#menu-main').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      $$('#menu-main').swipeLeft(function(event) {
        $('#menu-main').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

    }
  }
});


