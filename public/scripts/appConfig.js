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

  $scope.text = {
    bio : {
      P1: "I am a full-stack web developer with hands on experience working alongside other developers and" +
      " with clients to conceptualize, design, and build the most effective and convenient web applications for clients" +
      " utilizing different plugins and web API’s for added utility. ",
      P2: "I’ve learned several programming languages and best practices as a web developer, and I am striving" +
      " to continue honing my current technologies and expand my skill set to become a stronger and more diverse software" +
      " developer. Since my recent graduation from Prime Digital Academy, I’ve already learned Android development with" +
      " Java and XML, two languages that I hadn’t had any experience with before, along with looking into open source" +
      " cryptographic currency projects and developing in meteor.",
      P3: "I love creating and I am always working on one project or another on my own time, whether it be" +
      " music, art, a game, or learning a new skill. I am looking for a fast-paced and exciting work environment with an" +
      " open, close-knit, and fun community. My number one priority is having the opportunity to work with new" +
      " technologies and learn as much as possible."
    },
    resume : {
      myBlog: {
        listItems : [
          "Designed and developed a social networking site for bloggers.",
          "After registering as a user, a personal profile page is created. The user may upload a profile" +
          " Picture(stored in the cloud at Cloudinary) and personal interests and a bio can be added. A personal blog is" +
          " also created on that page where the user can post and other users can comment. By searching for other users" +
          " in the search bar, the user can navigate to other users’ profile pages and subscribe to other users’ blogs." +
          " All posts and comments on blogs the user is subscribed to are fed into the newsfeed page.",
          "Wrote a project scope to plan out the development process, project milestones, and goals.",
          "Technologies used: MEAN Stack(MongoDB, Express, AngularJs, Node.js), Javascript, Cloud Storage API," +
          " JS Web Tokens, Jade Templates, AJAX, CSS 3, Bootstrap, HTML 5.",
          "Github Repository: https://github.com/ADourgarian/social_networking_site"
        ]
      }
    }

  };

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