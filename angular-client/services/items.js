// untouched
angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.getAll = (callback) => {
      $http.get('/items')
        .then(({ data }) => callback(data));
    };
  });

const dogHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': '49f3c618-f343-43c9-985d-d773c9b33f98',
};

const catHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': 'd31d51ea-3c31-4ccf-8464-35127783c345',
};

// pet services
angular.module('app')
  .service('petService', function petService($http) {
    this.getAnimals = (animalType, callback) => {
      let templateUrl = `https://api.the${animalType}api.com/v1/images/search`;
      const headers = animalType === 'dog' ? dogHeaders : catHeaders;
      $http.get(templateUrl, headers)
        .then(({ data }) => callback(data[0].url)).catch((err) => {
          console.log(err);
        });
    };
  });


// post request to database
angular.module('app')
  .service('newPet', function newPet($http) {
    this.newAnimal = (obj) => {
      $http({
        method: 'POST',
        url: '/items',
        data: obj,
      })
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err);
        });
    };
  });