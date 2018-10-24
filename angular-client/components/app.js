angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService, petService) {
    itemsService.getAll((data) => {
      this.items = data;
    });
    // petService.getAnimals(('dog', (url) => {
    //   this.url = url;
    //   console.log(this.url, 'is this it');
    // }));
    this.getDog = () => {
      petService.getAnimals('dog', (newDog) => {
        this.pet = newDog;
      });
    };
    this.getCat = () => {
      petService.getAnimals('cat', (newCat) => {
        this.pet = newCat;
      });
    };
  })
  .component('app', {
    bindings: {
      pet: '<',
    },
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
