(function() {

  'use strict';

  angular
    .module('api.interceptor', [])
    .service('apiInterceptor', apiInterceptor);

  function apiInterceptor($rootScope) {
    let service = this;
    service.request = (config) => {
      var token = localStorage.getItem('token');
      if(token) {
        config.headers.Authorization = "Bearer " + token;
        return config;
      }
    };
    service.responseError = (response) => {
      if (response.status === 401) {
        $rootScope.$broadcast('unauthorized');
      }
      return response;
    };

  }

})();
