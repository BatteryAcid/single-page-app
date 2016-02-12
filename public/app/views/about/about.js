(function() {
   'use strict';
   angular.module('app').controller('AboutController', AboutController);
   //AboutController.$inject = [];
   function AboutController() {
      var vm = this;
      vm.description = "We are making a single page app using AngularJs and Play Framework!"
   }
})();