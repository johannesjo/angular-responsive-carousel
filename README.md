[![Build Status](https://travis-ci.org/johannesjo/angular-responsive-carousel.svg)](https://travis-ci.org/johannesjo/angular-responsive-carousel?branch=master)
[![Coverage Status](https://coveralls.io/repos/johannesjo/angular-responsive-carousel/badge.svg?branch=master)](https://coveralls.io/r/johannesjo/angular-responsive-carousel?branch=master)

angular-responsive-carousel
===========
 [DEMO](http://johannesjo.github.io/angular-responsive-carousel/#demo)!

Also you can play with the code on [Plnkr](http://plnkr.co/edit/yKrlohXVL15fRjTjZHBJ?p=preview).


[Bug-reports or feature request](https://github.com/johannesjo/angular-responsive-carousel/issues) as well as any other kind of **feedback is highly welcome!**

## getting started

Install it via bower
```
bower install angular-responsive-carousel -S
```
and add `angularResponsiveCarousel` as dependency in your main module:
```
angular.module('yourApp',[
  'angularResponsiveCarousel'
]);
```


```html

```

```javascript
// inside some controller

```


## configuration
There are also some defaults for you to set, if you like. You can do this by using the ```angularResponsiveCarouselProvider```:
```javascript
angular.module('exampleApp', [
  'angularResponsiveCarousel'
])
.config(function (angularResponsiveCarouselProvider)
{
  angularResponsiveCarouselProvider.extendConfig({

  });
});
```

Thats all the logic there is (for now). Adjusting the look and feel of the spinner can be done using your own styles.


## ❤ contribute ❤
I'm happy for any [issue or feature request](https://github.com/johannesjo/angular-responsive-carousel/issues), you might encounter or want to have. Even a one liner is better, than no feedback at all. Pull requests are also highly welcome. Just fork the repository, clone it and run `grunt serve` for development. Another important factor is the number of developers using and thus testing `angular-responsive-carousel`. Tell your fellow programmers, [say that you use it on ng-modules](http://ngmodules.org/modules/angular-responsive-carousel), tweet or even blog about it.

`angular-responsive-carousel` is published under the [The GNU Lesser General Public License V2.1](https://github.com/johannesjo/angular-responsive-carousel/blob/master/LICENSE).

## (possible) promising future features
* [your feature request](https://github.com/johannesjo/angular-responsive-carousel/issues)!
