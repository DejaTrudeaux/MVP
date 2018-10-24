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
  .service('petService', function petService ($http) {
    this.getAnimals = (query, animalType) => {
      const headers = animalType === 'dog' ? dogHeaders : catHeaders;
      $http.get(`https://api.the${animalType}api.com/v1/images/search`, headers)
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
