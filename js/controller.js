var App = angular.module("App",[]);

App.controller('memberController', function($scope, $http) {
  $http.get('js/members.json')
       .then(function(response){
          $scope.members = response.data;                
        });
});


App.controller('eMemberController', function($scope, $http) {
  $http.get('js/executiveMembers.json')
       .then(function(response){
          $scope.eMembers = response.data;                
        });
});

