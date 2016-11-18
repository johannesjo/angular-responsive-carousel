/**
 * @ngdoc directive
 * @name angularResponsiveCarousel.directive:responsiveCarouselSlide
 * @description
 * # responsiveCarouselSlide
 */

(function() {
    'use strict';

    angular
        .module('angularResponsiveCarousel')
        .directive('responsiveCarouselSlide', responsiveCarouselSlide);

    /* @ngInject */
    function responsiveCarouselSlide() {
        return {
            templateUrl: 'responsive-carousel-slide-d.html',
            bindToController: true,
            controller: ResponsiveCarouselSlideCtrl,
            controllerAs: 'vm',
            link: linkFn,
            restrict: 'A',
            scope: {

            }
        };

        function linkFn(scope, element, attrs) {

        }
    }

    /* @ngInject */
    function ResponsiveCarouselSlideCtrl() {
        var vm = this;
    }

})();
