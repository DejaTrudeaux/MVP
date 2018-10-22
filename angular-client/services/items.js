// // untouched
// angular.module('app')
//   .service('itemsService', function itemsService($http) {
//     this.getAll = (callback) => {
//       $http.get('/items')
//         .then(({ data }) => {
//           if (callback) {
//             callback(data);
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//   });

// dogs
angular.module('dogPage')
  .service('dogService', function dogService($http) {
    this.getAll = (callback) => {
      $http.get('/dogs')
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


// cats
angular.module('catPage')
  .service('catService', function catService($http) {
    this.getAll = (callback) => {
      $http.get('/cats')
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
