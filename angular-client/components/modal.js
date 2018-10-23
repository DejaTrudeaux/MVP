angular.module('modal')
  .controller('ModalCtrl', (petService) => {
    petService.getAll((data) => {
      this.items = data;
    });
  })
  .component('modal', {
    bindings: {},
    controller: 'ModalCtrl',
    templateUrl: '/templates/modal.html',
  });
