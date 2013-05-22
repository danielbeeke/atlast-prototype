/********************************************************
 * Main
 *
 * The init of the app.
 * Holds some requirejs config.
 ********************************************************/

require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        leaflet: '../bower_components/leaflet/dist/leaflet',
        twig: '../bower_components/twig.js/twig.min',
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
});