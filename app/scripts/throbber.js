/********************************************************
 * Throbber screen
 *
 * Shows loading progress in a throbber screen.
 ********************************************************/

define(['jquery'], function ($) {
  return {
    start: function() {
      $('body').addClass('throbber-active');
    },
    end: function() {
      $('body').removeClass('throbber-active');
    }
  }
});