(function() {
  'use strict';
  angular.module('app')
    .component('navbar', {
      templateUrl: './js/navbar/navbar.template.html',
      controller: NavbarController
    });
    function NavbarController() {
      let vm = this;
      console.log('Sanity check from navbar');
    }
}());
