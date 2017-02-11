(function() {
  'use strict';

  angular
    .module('register.component', [])
    .component('register', {
      templateUrl: 'js/auth/register/register.template.html',
      controller: RegisterController
    });

  RegisterController.$inject = ['registerService'];
  function RegisterController(registerService) {
    const vm = this;
    vm.user = {};

    vm.onRegister = function() {
      registerService.register(vm.user)
      .then((user) => {
        console.log(user.data);
      })
      .catch((err) => {
        console.log(err);
      });
    };
  }
}());
