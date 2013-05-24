/********************************************************
 * Menu
 *
 * Provides slide menus.
 ********************************************************/

define(['jquery', 'twigloader', 'settings', 'popup', 'once'], function ($, twigFabric, settingsFabric, popupFabric) {

  var menuData = {};

  var menuFabric = {
    init: function() {

/********************************************************
 * Prepare
 ********************************************************/

      $.getJSON(settingsFabric.api + '/menu/' + settingsFabric.instanceId, null, function(json) {
        var menuMainMarkup = twigFabric.render('menu-main', json);
        $('#menu-main').html(menuMainMarkup);
        menuFabric.attachFunctions();
      });

      $.getJSON(settingsFabric.api + '/filters/' + settingsFabric.instanceId, null, function(json) {
        var menuFiltersMarkup = twigFabric.render('menu-filters', json);
        $('#menu-filters').html(menuFiltersMarkup);
        menuFabric.attachFunctions();
      });

    },
/********************************************************
 * Functions
 ********************************************************/
    attachFunctions: function() {
      // Control functions.
      $(window).once('attachFunctions').on('resize', function() {
        $('.menu ul').css('max-height', $(window).height() - 88);
      });

      $(window).resize();

/********************************************************
 * Touch functions
 ********************************************************/

      $('.close-button, .trigger-menu').once('attachFunctions').on('click', function () {
        $(this).parent().toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      $('.popup-trigger').once('attachFunctions').on('click', function () {
        $.getJSON(settingsFabric.api + '/popup_page/' + $(this).attr('data-id'), null, function(json) {
          json.fullscreen = true;

          $('.menu.expanded').removeClass('expanded');
          $('body').removeClass('has-menu-expanded');

          popupFabric.open(json);
        });
      });


      // Filter menu swipes
      $$('#trigger-menu-filters').on('swipeLeft', function(event) {
        $('#menu-filters').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      $$('#menu-filters').on('swipeRight', function(event) {
        $('#menu-filters').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      // Main menu swipes
      $$('#trigger-menu-main').on('swipeRight', function(event) {
        $('#menu-main').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      $$('#menu-main').on('swipeLeft', function(event) {
        $('#menu-main').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

    }
  }

  return menuFabric;
});


