angular.module('modal')
  .controller('ModalCtrl', (itemsService) => {
    itemsService.getAll((data) => {
      this.items = data;
    });
  })
  .component('modal', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/modal.html',
  });
