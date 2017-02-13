(function() {

  'use strict';

  angular
    .module('main.service', [])
    .service('mainService', mainService);

  function mainService($rootScope) {
    console.log("Sanity Check from main service");
    let vm = this;

  }

})();
