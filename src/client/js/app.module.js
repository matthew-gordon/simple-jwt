(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.config',
      'api.interceptor',
      'main.service',
      'main.component',
      'auth.service',
      'login.component',
      'register.component',
      'dashboard.component'
    ]);
}());
