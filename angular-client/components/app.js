angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService, petService) {
    itemsService.getAll((data) => {
      this.items = data;
    });
    petService.getAnimals(('dog', (url) => { 
      // this.url = url;
      console.log(this.url);
    }));
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
