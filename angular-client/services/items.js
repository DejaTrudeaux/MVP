// untouched
angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.getAll = (callback) => {
      console.log('sending get req');
      $http.get('/items')
        .then(( data ) => {
          console.log(data, 'data');
          if (callback) {
            console.log('then');
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  });

// dogs for random dog image
// angular.module('app')
//   .service('itemsService', function ($http) {
//     this.getAll = function (query, callback) {
//       $http.get('https://api.thedogapi.com/v1/images/search', {
//         headers: {
//           'Content-Type': 'application/json',
//           'x-api-key': '49f3c618-f343-43c9-985d-d773c9b33f98',
//         },
//       })
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


// // cats for random cat image
//   .service('catService', function catService($http) {
//     this.getAll = (callback) => {
//       $http.get('/cats')
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

// // list items to render to main page
//   .service('petService', function catService($http) {
//     this.getAll = (callback) => {
//       $http.get('/pets')
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
