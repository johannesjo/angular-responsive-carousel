angular.module('angularResponsiveCarousel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('responsive-carousel-controls-d.html',
    "<div>This is the responsiveCarouselControls directive.</div>"
  );


  $templateCache.put('responsive-carousel-d.html',
    "<div class=\"responsive-carousel\"><div data-responsive-carousel-indicators data-ng-if=\"vm.indicatorsPosition==='BEFORE'\"></div><div class=\"responsive-carousel-rail\"><div class=\"responsive-carousel-train\"><div class=\"responsive-carousel-slides\" data-ng-transclude></div></div></div><div data-responsive-carousel-indicators data-ng-if=\"vm.indicatorsPosition==='AFTER'\"></div><div data-responsive-carousel-controls></div></div>"
  );


  $templateCache.put('responsive-carousel-indicators-d.html',
    "<div>This is the responsiveCarouselIndicators directive.</div>"
  );


  $templateCache.put('responsive-carousel-slide-d.html',
    "<div class=\"responsive-carousel-slide\" data-ng-transclude></div>"
  );

}]);
