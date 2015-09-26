cheepEats.controller('DealCtrl', ['$scope', '$state', 'DealFactory',
function DealCtrl($scope, $state, DealFactory){

  $scope.deals = DealFactory.deals;
  $scope.DealFactory = DealFactory;



  $scope.addThenHome = function(){
    DealFactory.addDeal();
    $state.go('dealsList');
  }

}]);
