(function() {
  'use strict';

  angular
    .module('login.component', [])
    .component('login', {
      templateUrl: 'js/auth/login/login.template.html',
      controller: LoginController
    });

    LoginController.$inject = ['loginService', '$state'];

    function LoginController(loginService, $state) {
      const vm = this;
      vm.user = {};
      vm.loginError = false;
      vm.onLogin = () => {
        loginService.login(vm.user)
        .then((user) => {
          localStorage.setItem('token', user.data.token);
          $state.go('dashboard');
        })
        .catch((err) => {
          if (err) {
            vm.loginError = true;
          }
        });
      };
    }
}());
