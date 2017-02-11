(function() {
  'use strict';
  angular
    .module('main.component', [])
    .component('main', {
      templateUrl: 'js/main/main.template.html',
      controller: MainController
    });

    MainController.$inject = ['$location'];
    function MainController($location) {
      let vm = this;
      // console.log($location);
    }
}());
