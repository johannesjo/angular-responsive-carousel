/**
 * @ngdoc overview
 * @name angularResponsiveCarousel
 * @description
 * angularResponsiveCarousel
 *
 */
(function() {
  'use strict';

  angular.module('angularResponsiveCarousel')
    .provider('angularResponsiveCarousel', angularResponsiveCarouselProvider);


  function angularResponsiveCarouselProvider() {

    // *****************
    // DEFAULTS & CONFIG
    // *****************

    var config = {};

    // *****************
    // SERVICE-FUNCTIONS
    // *****************


    // *************************
    // PROVIDER-CONFIG-FUNCTIONS
    // *************************
    return {
      extendConfig: function(newConfig) {
        config = angular.extend(config, newConfig);
      },


      // ************************************************
      // ACTUAL FACTORY FUNCTION - used by the directive
      // ************************************************

      $get: function() {
        return {
          config: config
        };
      }
    };
  }
})();
