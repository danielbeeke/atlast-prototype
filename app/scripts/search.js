/********************************************************
 * Search
 *
 * Handles search requests.
 ********************************************************/

define(['jquery', 'twigloader'], function ($, twigFabric) {
  return {
    init: function() {
      var searchMarkup = twigFabric.render('search');

      $('#search-wrapper').html(searchMarkup);

      var searchResponseMarkup = twigFabric.render('searchresults');
      $('#search-results').html(searchResponseMarkup);

      $('body').trigger('loadingProgress', ['search']);

      $('#search-input').focus(function() {
        $('.menu.expanded').removeClass('expanded');
        $('#search-results').addClass('expanded');
        $('body').addClass('has-menu-expanded');
      });

      $('#search-input').blur(function() {
        $('.menu.expanded').removeClass('expanded');
        $('body').removeClass('has-menu-expanded');
      });

      $('#search-results-wrapper .close-button').click(function() {
        $('.menu.expanded').removeClass('expanded');
        $('body').removeClass('has-menu-expanded');
      });

      $('#search-input').keyup(function() {
        // $(this).val()

        var response = {
          responseItems: {
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
          }
        };

        var searchResponseMarkup = twigFabric.render('searchresults', response);
        $('#search-results').html(searchResponseMarkup);

        $('#search-results').addClass('expanded');
        $('body').addClass('has-menu-expanded');

        // Triggers a resize on the menu
        $(window).resize();
      });
    }
  }
});




