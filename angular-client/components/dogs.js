angular.module('dogPage')
  .controller('DogPageCtrl', (dogsService) => {
    dogsService.getAll((data) => {
      this.dogs = data;
    });
  })
  .component('dogPage', {
    bindings: {},
    controller: 'DogPageCtrl',
    templateUrl: '/templates/dog.html',
  });
