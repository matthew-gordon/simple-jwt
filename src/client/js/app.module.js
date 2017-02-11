(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.config',
      'main.component',
      'login.service',
      'login.component',
      'register.component'
    ]);
}());
