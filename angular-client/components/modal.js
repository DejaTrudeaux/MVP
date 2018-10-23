angular.module('ModalPopup')
  .controller(
  //   'ModalCtrl', function ($modal) {
  //   this.open = function () {
  //     console.log('opening pop up');
  //     const modalInstance = $modal.open({
  //       templateUrl: 'modal.html',
  //     });
  //   };
  // }
  )
  .component('modal', {
    bindings: {},
    controller: 'ModalCtrl',
    templateUrl: '/templates/modal.html',
  });


// (petService) => {
//   petService.getAll((data) => {
//     this.items = data;
//   });
// }
