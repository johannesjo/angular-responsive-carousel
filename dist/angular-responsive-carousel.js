/**
 * @ngdoc overview
 * @name angularResponsiveCarousel
 * @description
 * angularResponsiveCarousel
 *
 */
(function() {
  'use strict';
  angular.module('angularResponsiveCarousel', []);
})();

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

  ResponsiveCarouselCtrl.$inject = ["$window", "$scope", "$interval"];
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
  function ResponsiveCarouselCtrl($window, $scope, $interval) {
    console.log('I am here!');

  }
})();

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

angular.module('angularResponsiveCarousel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('responsive-carousel-controls-d.html',
    "This is the responsiveCarouselControls directive."
  );


  $templateCache.put('responsive-carousel-d.html',
    "<h1>RESPONSIVE CAROUSEL</h1>"
  );


  $templateCache.put('responsive-carousel-indicators-d.html',
    "This is the responsiveCarouselIndicators directive."
  );


  $templateCache.put('responsive-carousel-slide-d.html',
    "This is the responsiveCarouselSlide directive."
  );

}]);

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
            restrict: 'A',
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
