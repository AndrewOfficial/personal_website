var app = angular.module('personalWebsite',[]);

app.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){
  var lastPanel = '';
  $scope.currentPannel = "bio";
  $scope.technologies = [
    {
      name:"Javascript",
      level: 5
    },{
      name:"AngularJS",
      level: 5
    },{
      name:"Nodejs",
      level: 5
    },{
      name:"Express",
      level: 5
    },{
      name:"AJAX",
      level: 5
    },{
      name:"HTML",
      level: 5
    },{
      name:"CSS",
      level: 5
    },{
      name:"LESS",
      level: 5
    },{
      name:"Bootstrap",
      level: 5
    },{
      name:"Express",
      level: 5
    },{
      name:"MongoDB",
      level: 5
    },{
      name:"Mongoose",
      level: 5
    },{
      name:"Git",
      level: 5
    },{
      name:"User Experience",
      level: 5
    },{
      name:"Jquery",
      level: 4
    },{
      name:"Jade Templates",
      level: 4
    },{
      name:"ECMAscript",
      level: 4
    },{
      name:"Web Design",
      level: 4
    },{
      name:"User Interface",
      level: 4
    },{
      name:"Java",
      level: 3
    },{
      name:"XML",
      level: 3
    },{
      name:"Android",
      level: 3
    }
  ];

  $scope.nav = function(css){
    $scope.currentPanel = css;
    $scope.loading = true;
    $timeout(function () {
      $scope.loading = false;
    }, 1000);

    console.log($scope.currentPanel);
    activatePanel(css);
  };

  $scope.nav('bio');
  function activatePanel(css){
    if(lastPanel){
      lastPanel.style.removeProperty('background-color');
    }

    var panel = document.getElementById(css);
    panel.style.backgroundColor = "rgba(38, 149, 182, 0.2)";

    lastPanel = panel;
  }

  $scope.getNumber = function (num){
    return new Array(num);
  }

}]);