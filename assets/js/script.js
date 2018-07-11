angular.module('testApp', []);
  angular.module('testApp').controller('myCtrl', ['$scope', myCtrlFactory])
   function myCtrlFactory($scope){
    $scope.good = true;
    $scope.notGood = true;
    $scope.maForm.emailInput.$valid = function(){
      $scope.good = false;
      $scope.notGood = true;
    }
    $scope.maForm.email.$invalid = function(){
      $scope.notGood = false;
      $scope.Good = true;
    }
  };
