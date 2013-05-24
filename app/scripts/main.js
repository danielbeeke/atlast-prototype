/********************************************************
 * Main
 *
 * The init of the app.
 * Holds some requirejs config.
 *
 * Small hack in quojs:
 * https://groups.google.com/forum/#!topic/quojs/o3Sh6KxPg3I
 ********************************************************/

require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        leaflet: '../bower_components/leaflet/dist/leaflet',
        twig: '../bower_components/twig.js/twig.min',
        scrollTo: '../bower_components/jquery.scrollTo/jquery.scrollTo',
        easing: '../bower_components/jquery-easing/jquery.easing',
        once: '../bower_components/jquery-once/jquery.once',
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
});