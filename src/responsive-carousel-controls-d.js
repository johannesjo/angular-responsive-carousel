/**
 * @ngdoc directive
 * @name angularResponsiveCarousel.directive:responsiveCarouselControls
 * @description
 * # responsiveCarouselControls
 */

(function() {
    'use strict';

    angular
        .module('angularResponsiveCarousel')
        .directive('responsiveCarouselControls', responsiveCarouselControls);

    /* @ngInject */
    function responsiveCarouselControls() {
        return {
            templateUrl: 'responsive-carousel-controls-d.html',
            bindToController: true,
            controller: ResponsiveCarouselControlsCtrl,
            controllerAs: 'vm',
            link: linkFn,
            restrict: 'EA',
            scope: {

            }
        };

        function linkFn(scope, element, attrs) {

        }
    }

    /* @ngInject */
    function ResponsiveCarouselControlsCtrl() {
        var vm = this;
    }

})();
