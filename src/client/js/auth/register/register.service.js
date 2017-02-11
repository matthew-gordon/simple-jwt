(function() {

  'use strict';

  angular
    .module('register.service', [])
    .service('registerService', registerService);

  loginService.$inject = ['$http'];

  function registerService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://localhost:3000/auth/';
    this.register = (user) => {
      return $http({
        method: 'POST',
        url: baseURL + 'register',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();
