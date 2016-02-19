/*
 * The main routes for the app
 * */
(function(){
    // ecma6 / jshint
    'use strict';

    /*
     * Get the returned states from getStates function
     * and send it to the configureStates function that
     * do the registry of new states/routes
     * */
    function appRun(routerHelper) {
        // calls the state registration method
        // first param is the states returned by the private method/
        // second param is the otherwise route
        routerHelper.configureStates(getStates(), '/');
    }

    /*
     * Return the list of objects containing the states to register
     * */
    function getStates() {
        return [
            {
                state: 'main.roulette',
                url : '/',
                config: {
                    views: {
                        'main': {templateUrl : 'application/layouts/main.layout.html'}
                    }
                }
            }
        ];
    }

    // run the config code inside the app main module
    angular
        .module('MoviesRouletteApp')
        .run(appRun);

})();
