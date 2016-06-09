var app = angular.module('personalWebsite',[]);

app.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){
  var lastPanel = '';
  $scope.currentPannel = "bio";
  $scope.technologies = [
    {
      name:"Javascript"
    },{
      name:"AngularJS"
    },{
      name:"Nodejs"
    },{
      name:"WebSockets"
    },{
      name:"Express"
    },{
      name:"AJAX"
    },{
      name:"HTML"
    },{
      name:"CSS"
    },{
      name:"LESS"
    },{
      name:"Bootstrap"
    },{
      name:"Express"
    },{
      name:"MongoDB"
    },{
      name:"Mongoose"
    },{
      name:"Git"
    },{
      name:"User Experience"
    },{
      name:"Jquery"
    },{
      name:"Jade Templates"
    },{
      name:"Web Design"
    },{
      name:"User Interface"
    },{
      name:"ECMAscript"
    },{
      name:"Java"
    },{
      name:"XML"
    },{
      name:"Android"
    }
  ];

  $scope.text = {
    bio : [
      "I am a full-stack web developer with hands on experience working alongside other developers and " +
      "with clients to conceptualize, design, and build the most effective and convenient web applications for clients " +
      "utilizing different plugins and web API’s for added utility. ",
      "I’ve learned several programming languages and best practices as a web developer, and I am striving " +
      "to continue honing my current technologies and expand my skill set to become a stronger and more diverse software " +
      "developer. Since my recent graduation from Prime Digital Academy, I’ve already learned Android development with " +
      "Java and XML, two languages that I hadn’t had any experience with before, along with looking into open source " +
      "cryptographic currency projects and developing in meteor. ",
      "The traits that make me a strong programmer are my patience and perseverance, fast and strategic problem solving " +
      "methods, and ability to unify and amplify the abilities of other programmers. I pride myself in being able learn " +
      "fast, adapt to new situations, and accomplish my goals, even if they seem insurmountable at first.",
      "I love creating and I am always working on one project or another on my own time, whether it be " +
      "music, art, a game, or learning a new skill. I am looking for a fast-paced and exciting work environment with an " +
      "open, close-knit, and fun community. My number one priority is having the opportunity to work with new " +
      "technologies and learn as much as possible."
    ],
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
          " JS Web Tokens, Jade Templates, AJAX, CSS 3, Bootstrap, HTML 5."
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
      quizApp : {
        title: 'QuizApp',
        url: 'https://thequizapp.herokuapp.com/',
        github_url: 'https://github.com/ADourgarian/quizApp',
        paragraphs: [
          "Moodalytics is a collaborative project between two other members and me that we built at the Mothers’ Day " +
          "Hackathon at Leonardo’s Basement. The challenge was to show up to the event, join a group with someone who " +
          "came with an idea or concept for an IOT device/app, and hack away for 10 hours on it. Our team created an " +
          "android app that used facial recognition to read your mood. Based on how big of a smile you have, it would " +
          "light up an appropriate number of LED lights and fluctuate for your changing facial expression. At the end " +
          "of the day, when the judging was finished, we snagged third place!",
          "For this project we used java and xml for the android app and sent data up to a Node.js server which calculated " +
          "how many LED lights to light up, which it sent to an Arduino calibrated to light up a light strip based on what number it was passed. "
        ]
      },
      moodalytics : {
        title: 'Moodalytics',
        github_url: 'https://github.com/ADourgarian/Moodalytics',
        paragraphs: [
          "Moodalytics is a collaborative project between two other members and me that we built at the Mothers’ Day " +
          "Hackathon at Leonardo’s Basement. The challenge was to show up to the event, join a group with someone who " +
          "came with an idea or concept for an IOT device/app, and hack away for 10 hours on it. Our team created an " +
          "android app that used facial recognition to read your mood. Based on how big of a smile you have, it would " +
          "light up an appropriate number of LED lights and fluctuate for your changing facial expression. At the end " +
          "of the day, when the judging was finished, we snagged third place!",
          "For this project we used java and xml for the android app and sent data up to a Node.js server which calculated " +
          "how many LED lights to light up, which it sent to an Arduino calibrated to light up a light strip based on what number it was passed. "
        ]
      },
      tanksio : {
        title: 'Tanks.io',
        url: 'https://tanksio.herokuapp.com',
        github_url: 'https://github.com/ADourgarian/tank.io',
        paragraphs: [
          "Tanks.io is a personal videogame project I’ve been working on that was inspired by agar.io . The concept is " +
          "a multiplayer 2D birds-eye view bullet hell. The player will control a “tank” that can shoot projectiles at " +
          "other tanks. Taking down other players will give the player a buff, making them harder to kill and also allowing " +
          "them to more easily take down others. If a player takes down a buffed opponent, they will get a bigger buff. " +
          "I’ve got websockets set up so that anyone who goes to the game url will join a room with all the other players. " +
          "Currently you can move around with WASD and shoot by holding down the left mouse button in the direction you want to shoot.",
          "For this project I’m using a couple of new technologies. I’m running a Node.js server that implements websockets " +
          "for faster communication with the clients and makes live updating possible. Also, I am utilizing the Phaser " +
          "game engine to keep track of players and projectiles on Canvas."
        ]
      },
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
        github_url: "https://github.com/ADourgarian/union-park/blob/master/public/scripts/controllers/ccTableCtrl.js",
        paragraphs: ["Our group project client was Union Park Marketing. Our job was to design and build an application in a 3 week " +
        "period that would pull in information on upcoming events from google calendar APIs and display it in an easy to " +
        "visualize and editable fashion.",
        "For this project, I spent a lot of time honing my front end Technologies. Most of my work was in Angularjs and Javascript " +
        "as well as html and css/bootstrap. We also integrated some plugins such as the tag search and the pagination elements. " +
        "The Github Url above leads to a sample page of code that I personally wrote."]
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
    //panel.style.backgroundColor = "rgb(248, 248, 248)";

    lastPanel = panel;
  }

  $scope.getNumber = function (num){
    return new Array(num);
  }

}]);