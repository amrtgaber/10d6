angular.module('10d6', ['angular-gestures', 'ngAnimate'])
  .config(function (hammerDefaultOptsProvider) {
    hammerDefaultOptsProvider.set({
        recognizers: [[Hammer.Tap, {time: 250}], [Hammer.Swipe, {time: 100}]]
    });
  });
