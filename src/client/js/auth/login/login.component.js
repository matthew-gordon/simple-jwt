(function() {
  'use strict';

  angular
    .module('login.component', [])
    .component('login', {
      templateUrl: 'js/auth/login/login.template.html',
      controller: LoginController
    });

    LoginController.$inject = ['loginService'];

    function LoginController(loginService) {
      const vm = this;
      vm.test = 'just a test';
      console.log(loginService.test());
    }
}());
