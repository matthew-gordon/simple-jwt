(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.config',
      'login.component',
      'register.component'
    ]);
}());
