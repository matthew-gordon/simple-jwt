(function() {

  'use strict';

  angular
    .module('status.service', [])
    .service('statusService', statusService);

  statusService.$inject = ['$http'];

  function statusService($http) {
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
