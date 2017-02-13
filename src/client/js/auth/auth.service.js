(function() {

  'use strict';

  angular
    .module('auth.service', [])
    .service('authService', authService);

  authService.$inject = ['$http', '$state'];

  function authService($http, $state) {
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

    this.login = (user) => {
      return $http({
        method: 'POST',
        url: baseURL + 'login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };

    // this.ensureAuthenticated = (token) => {
    //   return $http({
    //     method: 'GET',
    //     url: baseURL + 'user',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: 'Bearer ' + token
    //     }
    //   });
    // };

  }

})();
