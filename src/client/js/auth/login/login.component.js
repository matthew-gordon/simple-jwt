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
      vm.user = {};
      vm.onLogin = () => {
        loginService.login(vm.user)
        .then((user) => {
          console.log(user.data);
        })
        .catch((err) => {
          console.log(err);
        });
      };
    }
}());
