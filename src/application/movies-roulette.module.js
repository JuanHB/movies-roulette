/*
* The app modules wrapper
* */
(function(){
    // ecma6 / jshint
    'use strict';

    angular
        .module('MoviesRouletteApp', [
            // The Core module, that contains all 3rd part modules
            'MoviesRouletteApp.core',

            // The Roulette module
            'MoviesRouletteApp.roulette'
        ])

})();