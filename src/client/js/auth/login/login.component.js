(function() {
  'use strict';

  angular
    .module('login.component', [])
    .component('login', {
      templateUrl: 'js/auth/login/login.template.html',
      controller: LoginController
    });

  LoginController.$inject = ['authService', '$state'];

  function LoginController(authService, $state) {
    const vm = this;
    vm.user = {};
    vm.loginError = false;

    vm.onLogin = () => {
      authService.login(vm.user)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        $state.go('dashboard');
      })
      .catch((err) => {
        vm.loginError = true;
        vm.loginForm.$setPristine();
        return new Error(err);
      });
    };
  }
}());
