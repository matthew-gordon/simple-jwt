(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.config',
      'main.component',
      'login.component',
      'register.component'
    ]);
}());
