// untouched
angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.getAll = (query, callback) => {
      $http.get('/items')
        .then(({ data }) => {
          if (callback) {
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  });

const dogHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': '49f3c618 - f343 - 43c9-985d-d773c9b33f98',
};

const catHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': 'd31d51ea-3c31-4ccf-8464-35127783c345',
};


// pet services
angular.module('app')
  .service('petService', function ($http) {
    this.getAnimals = function (query, animalType) {
      $http.get(`https://api.the${animalType}api.com/v1/images/search`, dogHeaders)
        // .then((resp) => {
        //   const data = resp.data;
        //   return data;
        // })
        .then(({ data }) => data);
    };
  });

// // .catch((err) => {
// console.log(err);
//         });
