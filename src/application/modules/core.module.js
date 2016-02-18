/*
* 3rd parts module loader
* */
(function(){
    'use strict';

    angular
        .module('MoviesRouletteApp.core', [
            // AngularJS modules
            'ngMaterial',
            'ngMessages',
            'ngAria',
            'ngAnimate',
            // 3rd part modules
            'ui.router'
        ]);

})();