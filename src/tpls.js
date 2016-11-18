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
