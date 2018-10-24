angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    itemsService.getAll((data) => {
      this.items = data;
      console.log(data, 'inApp');
    });
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
