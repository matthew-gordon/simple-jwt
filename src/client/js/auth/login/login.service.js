(function() {

  'use strict';

  angular
    .module('login.service', [])
    .service('loginService', loginService);

  loginService.$inject = ['$http'];

  function loginService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://localhost:3000/auth/';
    this.login = (user) => {
      return $http({
        method: 'POST',
        url: baseURL + 'login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();
