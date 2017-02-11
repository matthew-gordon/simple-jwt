(function() {
  'use strict';

  angular
    .module('status.component', [])
    .component('status', {
      templateUrl: 'js/auth/status/status.template.html',
      controller: StatusController
    });

    StatusController.$inject = ['statusService'];
    function StatusController(statusService) {
    const vm = this;
    vm.isLoggedIn = false;
    const token = localStorage.getItem('token');
    if (token) {
      statusService.ensureAuthenticated(token)
      .then((user) => {
        if (user.data.status === 'success');
        vm.isLoggedIn = true;
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}());
