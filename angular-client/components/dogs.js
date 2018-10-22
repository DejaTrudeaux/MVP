angular.module('dogPage')
  .controller('DogPageCtrl', (dogsService) => {
    dogsService.getAll((data) => {
      this.items = data;
    });
  })
  .component('dogPage', {
    bindings: {},
    controller: 'DogPageCtrl',
    templateUrl: '/templates/app.html',
  });
