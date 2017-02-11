(function() {

  'use strict';

  angular
    .module('main.service', [])
    .service('mainService', mainService);

  mainService.$inject = [];

  function mainService() {
    console.log("Sanity Check!");
  }

})();
