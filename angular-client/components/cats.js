angular.module('catPage')
  .controller('CatPageCtrl', (catsService) => {
    catsService.getAll((data) => {
      this.cats = data;
    });
  })
  .component('catPage', {
    bindings: {},
    controller: 'CatPageCtrl',
    templateUrl: '/templates/cat.html',
  });
