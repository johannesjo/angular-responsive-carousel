/**
 * @ngdoc directive
 * @name angularResponsiveCarousel.directive:responsiveCarouselIndicators
 * @description
 * # responsiveCarouselIndicators
 */

(function() {
    'use strict';

    angular
        .module('angularResponsiveCarousel')
        .directive('responsiveCarouselIndicators', responsiveCarouselIndicators);

    /* @ngInject */
    function responsiveCarouselIndicators() {
        return {
            templateUrl: 'responsive-carousel-indicators-d.html',
            bindToController: true,
            controller: ResponsiveCarouselIndicatorsCtrl,
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
    function ResponsiveCarouselIndicatorsCtrl() {
        var vm = this;
    }

})();
