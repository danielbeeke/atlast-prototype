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

      // Getting the menu items.
      $.getJSON(settingsFabric.api + '/menu/' + settingsFabric.instanceId, null, function(json) {
        var menuMainMarkup = twigFabric.render('menu-main', json);
        $('#menu-main').html(menuMainMarkup);
        menuFabric.attachFunctions();
        $('body').trigger('loadingProgress', ['menuMain']);
      });

      // Gettings the filters.
      $.getJSON(settingsFabric.api + '/filters/' + settingsFabric.instanceId, null, function(json) {
        var menuFiltersMarkup = twigFabric.render('menu-filters', json);
        $('#menu-filters').html(menuFiltersMarkup);
        menuFabric.attachFunctions();
        $('body').trigger('loadingProgress', ['menuFilters']);
      });

    },
/********************************************************
 * Functions
 ********************************************************/
    attachFunctions: function() {
      // Control functions.
      $(window).resize(function() {
        $('.menu ul').css('max-height', $(window).height() - 88);
      });

      $(window).resize();

/********************************************************
 * Touch functions
 ********************************************************/

      // Filter menu swipes
      $$('#trigger-menu-filters:not(.processed)').addClass('processed').swipeLeft(function(event) {
        $('#menu-filters').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      $$('#menu-filters:not(.processed)').addClass('processed').swipeRight(function(event) {
        $('#menu-filters').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      // Main menu swipes
      $$('#trigger-menu-main:not(.processed)').addClass('processed').swipeRight(function(event) {
        $('#menu-main').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

      $$('#menu-main:not(.processed)').addClass('processed').swipeLeft(function(event) {
        $('#menu-main').toggleClass('expanded');
        $('body').toggleClass('has-menu-expanded');
      });

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

    }
  }

  return menuFabric;
});


