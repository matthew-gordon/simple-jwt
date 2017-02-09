(function() {
  'use strict';

  angular.module('app')
    .component('app', {
      templateUrl: './js/app/app.template.html',
      controller: AppController
    });
    function AppController() {
      let vm = this;
      console.log('Sanity Check from app component');
    }
}());
