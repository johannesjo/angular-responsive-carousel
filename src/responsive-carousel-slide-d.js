/**
 * @ngdoc directive
 * @name angularResponsiveCarousel.directive:responsiveCarouselSlide
 * @description
 * responsiveCarouselSlide
 */

(function() {
  'use strict';

  angular
    .module('angularResponsiveCarousel')
    .directive('responsiveCarouselSlide', responsiveCarouselSlide);

  /* @ngInject */
  function responsiveCarouselSlide() {
    return {
      restrict: 'EA',
      templateUrl: 'responsive-carousel-slide-d.html',
      bindToController: true,
      link: linkFn,
      transclude: true,
      replace: true,
      require: '^responsiveCarousel',
      scope: {
        index: '='
      }
    };

    function linkFn(scope, element, attrs, carouselCtrl) {
      // add slide to carouselCtrl on creation
      carouselCtrl.addSlide(attrs.index, element);

      // remove slide from carousel controller on $destroy
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(attrs.index, element);
      });

      // also check for html manipulation outside of angular
      element.on('$destroy', function() {
        scope.$destroy();
      });
    }
  }
})();
