(function() {
  'use strict';

  angular
    .module('register.component', [])
    .component('register', {
      templateUrl: 'js/auth/register/register.template.html',
      controller: RegisterController
    });

  RegisterController.$inject = ['authService', '$state'];

  function RegisterController(authService, $state) {
    const vm = this;
    vm.user = {};
    vm.registerError = false;

    vm.onRegister = () => {
      authService.register(vm.user)
      .then((response) => {
        if (response.data.status === 'Error') {
          vm.registerError = true;
        } else {
          localStorage.setItem('token', response.data.token);
          $state.go('dashboard');
        }
      })
      .catch((err) => {
        return new Error(err);
      });
    };
  }
}());
