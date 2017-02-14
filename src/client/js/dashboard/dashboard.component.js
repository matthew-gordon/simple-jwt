(function() {
  'use strict';

  angular
    .module('dashboard.component', [])
    .component('dashboard', {
      templateUrl: 'js/dashboard/dashboard.template.html',
      controller: DashboardController
    });

    DashboardController.$inject = ['authService', '$location', '$state'];

    function DashboardController(authService, $location, $state) {
      let vm = this;
      const token = localStorage.getItem('token');

      vm.onLogout = () => {
        localStorage.clear();
        $state.go('home');
      };
      if (token) {
        authService.ensureAuthenticated(token)
        .then((user) => {
          if (user.data.status === 'success');
          vm.isLoggedIn = true;
          vm.current_user = user.data;
        })
        .catch((err) => {
          return new Error(err);
        });
      }

    }
}());
