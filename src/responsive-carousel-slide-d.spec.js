'use strict';

describe('Directive: responsiveCarouselSlide', function() {

    // load the directive's module
    beforeEach(module('angularResponsiveCarousel'));
    beforeEach(module('templates'));

    var element,
        scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should do something', inject(function($compile) {
        element = $compile('<responsive-carousel-slide></responsive-carousel-slide>')(scope);
        scope.$digest();
        expect(true).toBe(true);
    }));
});