angular.module('assessment').controller('mainCtrl', function($scope, dataService) {

  $scope.webArr = dataService.getData();

})
