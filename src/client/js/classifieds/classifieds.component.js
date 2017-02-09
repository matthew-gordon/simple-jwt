(function() {
  'use strict';

  angular.module('app')
    .component('listings', {
      templateUrl: './js/classifieds/classifieds.template.html',
      controller: ListingsController
    });
    ListingsController.$inject = ['$http'];
    function ListingsController($http) {
      let vm = this;

      vm.$onInit = () => {
        $http.get('/classifieds')
        .then((res, err) => {
          if (err) {
            console.error(err);
          }
          vm.listings = res.data;
        });

        vm.showEditForm = false;
        vm.showCreateForm = false;
        vm.options = [
          {value: 'id', label: 'ID'},
          {value: 'title', label: 'TITLE'},
          {value: 'price', label: 'PRICE'}
        ];
        vm.sortByValue = vm.options[0].value;
      };

      vm.createFormToggle = () => {
        vm.showCreateForm = !vm.showCreateForm;
      };

      vm.editFormToggle = (listing) => {
        vm.showEditForm = !vm.showEditForm;
        vm.listing = listing;
      };

      vm.getAll = () => {
        $http.get('/classifieds')
        .then((res, err) => {
          if (err) {
            console.error(err);
          }
          vm.listings = res.data;
        });
      };

      vm.add = (listing) => {
        $http.post('/classifieds', listing)
        .then((res, err) => {
          if (err) {
            console.error(err);
          }
          vm.createForm.$setPristine();
          vm.createForm.$setUntouched();
          delete vm.listing;
          $http.get('/classifieds')
          .then((res, err) => {
            if (err) {
              console.error(err);
            }
          vm.listings = res.data;
          });
        });
      };

      vm.editListing = (listing) => {
        $http.patch(`/classifieds/${listing.id}`, listing)
        .then((res, err) => {
          if (err) {
            console.error(err);
          }
          vm.editForm.$setPristine();
          vm.editForm.$setUntouched();
          delete vm.listing;
          vm.editFormToggle();
        });
      };

      vm.deleteListing = (listingID) => {
        $http.delete(`classifieds/${listingID}`)
        .then((res, err) => {
          if (err) {
            console.error(err);
          }

          $http.get('/classifieds')
          .then((res, err) => {
            if (err) {
              console.error(err);
            }
            vm.listings = res.data;
          });
        });
      };

    }
}());
