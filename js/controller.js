var App = angular.module("App",[]);

App.controller('JSONController', function($scope, $http) {
  $http.get('js/members.json')
       .then(function(response){
          $scope.members = response.data;                
        });
});