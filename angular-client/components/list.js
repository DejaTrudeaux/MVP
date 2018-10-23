angular.module('app')
  .component('list', {
    bindings: {
      items: '<',
    },
    controller($window) {
      this.items = $window.exampleVideoData;
    },
    templateUrl: '/templates/list.html',
  });
