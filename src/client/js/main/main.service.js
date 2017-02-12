(function() {

  'use strict';

  angular
    .module('main.service', [])
    .service('mainService', mainService);



  function mainService($rootScope) {
    console.log("Sanity Check lco!");
    let service = this;

    service.request = function(config) {
      var token = localStorage.getItem("token");
      if(token) {
        config.headers.Authorization = "Bearer " + token;
        return config;
      }
      return config;
    };
    service.responseError = function(response) {
      if (response.status === 401) {
        $rootScope.$broadcast('unauthorized');
      }
      return response;
    };

  }

})();
