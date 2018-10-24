angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService, petService, newPet) {
    itemsService.getAll((data) => {
      this.items = data;
    });
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
    this.namedPet = (username, petName) => {
      const img = this.pet;
      // service database save post request
      const namedObj = {
        image: img,
        petname: petName,
        username,
      };
      newPet.newAnimal(namedObj);
      setTimeout(()=>{
        window.location.reload();
      }, 1000);
    };
  })
  .component('app', {
    bindings: {
      pet: '<',
    },
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
