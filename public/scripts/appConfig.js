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
      name:"Web Design",
      level: 4
    },{
      name:"User Interface",
      level: 4
    },{
      name:"ECMAscript",
      level: 3
    },{
      name:"Java",
      level: 2
    },{
      name:"XML",
      level: 2
    },{
      name:"Android",
      level: 2
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
      tworks: {
        listItems : [
          "Design new pages for upcoming software releases and redesign parts of current site to specification.",
          "Write new code and clean up bad code in meteor.js environment.",
          "Find and fix bugs in meteor.js while tracking bugs in Trello.",
          "Work with other developers remotely to overcome programming challenges and develop software solutions."
        ]
      },
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
      },
      unionPark: {
        listItems: [
          "Worked on a development team serving Union Park. Union Park is a marketing firm in Minneapolis that " +
          "specializes in Consumer Cue Marketing.",
          "Through client interaction with Union Park, we were able to give our project the direction we needed to" +
          " develop an effective app for them in the time we were allotted.",
          "Our project helps Union Park manage consumer cues for an editorial calendar product. Prior to our application," +
          " Union Park's editorial calendar was laid out in a spreadsheet and manually inputted. We automated the process" +
          " using third-party event feeds from Google and storing them in a database that was easily searchable.",
          "We developed an administrator interface along with a database structure utilizing Google APIs to optimize" +
          " their marketing calendar product creation and support further development of their website and business.",
          "Technologies used: Node.js, Express, Javascript, Google Cloud Datastore(Cloud Database), Angularjs, npm Scripts," +
          " Passport, Jade Templates, AJAX, CSS 3, Angular Materials, HTML 5."
        ]
      },
      tempworks: {
        listItems: [
          "Learned to design user interfaces for clients.",
          "Worked alongside professional web designers and developers.",
          "Participated in daily standups."
        ]
      },
      dunnBros: {
        listItems: [
          "Maintained cordial and professional relationships with coworkers, managers and customers.",
          "Informed customers about specialty drink and food ingredients as required.",
          "Operated cash register and credit card machine accurately and efficiently in processing customer payments.",
          "Upheld company customer service standards at all times."
        ]
      }
    },
    portfolio : {
      personal_website:{
        title: 'Personal Website(This website)',
        github_url: 'https://github.com/ADourgarian/personal_website',
        paragraphs: ["I created my personal website to showcase my bio and resume and designed it to be mobile friendly. I also " +
        "intend to put this portfolio up there eventually as well. For this website I used Angularjs and Javascript to manage " +
        "the content and tab click-events as well as jade, which is a templating engine which compiles into html. The " +
        "Angularjs and Javascript use was very light in this project, I highly recommend checking out my group project and " +
        "solo project from Prime academy below for better examples of my work in those technologies."]
      },
      tworks: {
        title: 'Tworks.io(Tempworks)',
        url: 'https://dev.aidacreative.com/login?returnUrl=%2F',
        paragraphs: ["Tworks.io is a startup underneath Tempworks that is redeveloping from scratch the software suite that Tempworks " +
        "licenses. Tworks.io’s new software application is used to streamline business networking and is especially designed " +
        "for temp and recruiting agencies. It allows a business to easily manage its relations with all of their employees " +
        "and customers. The objective with redeveloping the software is to increase speed, functionality, user-interface, " +
        "and user-experience along with adding a whole bunch of new features.",
        "You can create an account and log in at https://dev.aidacreative.com/login?returnUrl=%2F . I’ve done some " +
        "design work on the log in/register pages. Also once you log in. If you check out the navigation bar at the top, " +
        "I did some redesign work there. There was a lot of wonky html/css code that I had to take apart and rewrite and I " +
        "made it responsive for smaller screens widths such as cell-phones. I’m currently working on cleaning up the responsive " +
        "design and notification functionality as well as other bugs/to-dos."]
      },
      group_project: {
        title: 'Prime Academy Group Project',
        url: "http://ec2-52-91-228-202.compute-1.amazonaws.com:3000/",
        paragraphs: ["Our group project client was Union Park Marketing. Our job was to design and build an application in a 3 week " +
        "period that would pull in information on upcoming events from google calendar APIs and display it in an easy to " +
        "visualize and editable fashion.",
        "For this project, I spent a lot of time honing my front end Technologies. Most of my work was in Angularjs and Javascript " +
        "as well as html and css/bootstrap. We also integrated some plugins such as the tag search and the pagination elements. " +
        "Here is a link to code that I personally wrote: https://github.com/ADourgarian/union-park/blob/master/public/scripts/controllers/ccTableCtrl.js"]
      },
      solo_project: {
        title: 'Prime Academy Solo Project',
        github_url: 'https://github.com/ADourgarian/social_networking_site',
        paragraphs: [ "The goal was to make a social networking/blogging site for musicians(I am a guitarist). In this application," +
        "you can create a new user or log in as a previous users. Each user gets their own profile page, complete with " +
        "a personal info area and a personal blog. You can navigate to other users blogs and subscribe to them or comment" +
        "on their posts. Posts from all of your subscriptions get filtered into a personal newsfeed page that only the user can see. ",
        "For this project I spent most of my time writing node.js and Mongodb in the back and as well as Angularjs and Javascript. " +
        "I did not spend much time designing, but what I did do was heavily in bootstrap."]
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
    panel.style.backgroundColor = "rgb(248, 248, 248)";

    lastPanel = panel;
  }

  $scope.getNumber = function (num){
    return new Array(num);
  }

}]);