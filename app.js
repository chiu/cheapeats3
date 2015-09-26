var cheepEats = angular.module('cheepEats', ['ui.router', 'firebase']);

cheepEats.config(function($stateProvider) {

  $stateProvider.state('dealsList', {
    url: "",
    templateUrl: "partials/dealsList.html"
  });

  $stateProvider.state('addDeals', {
    url: "/add",
    templateUrl: "partials/addDeals.html"
  });


});
