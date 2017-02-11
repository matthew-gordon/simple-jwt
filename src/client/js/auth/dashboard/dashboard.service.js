(function() {

  'use strict';

  angular
    .module('dashboard.service', [])
    .service('dashboardService', dashboardService);

  dashboardService.$inject = ['$http', '$location'];

  function dashboardService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://localhost:3000/auth/';
    this.ensureAuthenticated = (token) => {

      return $http({
        method: 'GET',
        url: baseURL + 'user',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      });
    };
  }

})();
