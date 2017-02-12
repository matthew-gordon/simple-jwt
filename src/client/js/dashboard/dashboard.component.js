(function() {
  'use strict';

  angular
    .module('dashboard.component', [])
    .component('dashboard', {
      templateUrl: 'js/dashboard/dashboard.template.html',
      controller: DashboardController
    });

    DashboardController.$inject = ['dashboardService', '$location'];

    function DashboardController(dashboardService, $location) {
      const vm = this;
      const token = localStorage.getItem('token');
      vm.isLoggedIn = false;

      if (token) {
        dashboardService.ensureAuthenticated(token)
        .then((user) => {
          if (user.data.status === 'success');
          vm.isLoggedIn = true;
          vm.current_user = dashboardService.current_user;
        })
        .catch((err) => {
          console.log(err);
        });
      }

      vm.logout = () => {
        localStorage.clear();
        $location.path('/');
        console.log('Logged Out');
      };

    }
}());
