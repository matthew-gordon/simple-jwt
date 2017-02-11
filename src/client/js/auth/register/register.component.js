(function() {
  'use strict';

  angular
    .module('register.component', [])
    .component('register', {
      templateUrl: 'js/auth/register/register.template.html',
      controller: RegisterController
    });

  RegisterController.$inject = ['registerService', '$state'];
  function RegisterController(registerService, $state) {
    const vm = this;
    vm.user = {};

    vm.onRegister = function() {
      registerService.register(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
        $state.go('dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
    };
  }
}());
