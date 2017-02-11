(function() {

  'use strict';

  angular
    .module('login.service', [])
    .service('loginService', loginService);

  loginService.$inject = [];

  function loginService() {
    /*jshint validthis: true */
    this.test = function() {
      return 'working';
    };
  }

})();
