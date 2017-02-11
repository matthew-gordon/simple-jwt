(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.config',
      'main.service',
      'main.component',
      'login.service',
      'login.component',
      'register.service',
      'register.component',
      'dashboard.service',
      'dashboard.component'
    ]);
}());
