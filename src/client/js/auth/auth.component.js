(function() {
  'use strict';
  angular
    .module('app')
    .component('login', {
      templateUrl: './js/auth/auth.template.html',
      controller: LoginController
    });

    LoginController.$inject = ['$http', '$window'];
    function LoginController($http, $window) {
      let vm = this;
      console.log('Sanity Check from login');

      vm.login = (user) => {
        $http.post('/auth/login', user);
      };

    }
}());
