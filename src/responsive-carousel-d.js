/**
 * @ngdoc directive
 * @element responsiveCarousel
 * @name angularResponsiveCarousel.directive:responsiveCarousel
 * @requires lodash, ngTouch
 * @restrict EA
 * @description
 * responsiveCarousel used to display a different numbers of slides
 * across different breakpoints.
 */

(function() {
  'use strict';

  angular
    .module('angularResponsiveCarousel')
    .directive('responsiveCarousel', responsiveCarousel);

  /* @ngInject */
  function responsiveCarousel() {
    return {
      templateUrl: 'responsive-carousel-d.html',
      bindToController: true,
      controller: ResponsiveCarouselCtrl,
      controllerAs: 'vm',
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: {
        indicatorsPosition: '@',
        breakpoints: '=?',
        activeIndex: '=?',
        interval: '@',
        animateHeight: '@',
        startIndex: '@',
        onSlideChange: '&'
      },
      priority: 100
    };
  }

  /* @ngInject */
  function ResponsiveCarouselCtrl() {
    console.log('I am here!');

  }
})();
