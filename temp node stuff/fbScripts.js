
//sets up the Facebook NPM
var FB = require('fb'),
    //a constructor if we need options (probabily the permisions)
    fb = new FB.Facebook();
    //the id for the specific friend
    var defriendID;
    //the object that holds all of the specific info
    var randoInfo;
//This is to test login status
var fbPackaging = {

  login : function() {
        FB.login(function(response) {
            if (response.authResponse) {
             console.log('Welcome!  Fetching your information.... ');
             FB.api('/me', function(response) {
               console.log('Good to see you, ' + response.name + '.');
             });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        });
  },
  //This is to test login status
  loginTest : function() {
    //built in function to test if we are connected
    FB.getLoginStatus(function(response) {
      //if it's connected it will respond with the accessToken in the console (might need to mover this to the server)
      if (response.status === 'connected') {
          console.log(response.authResponse.accessToken);
        }
    });
  },
  //identify the user
  identify : function() {
    //makes a call to the api for the me object displays only the the name and id
    FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
    });
  },
  //pulls a list of the users friends. and picks a random one
  friends : function() {
    /* make the API call */
    FB.api(
        //makes a call to pull a list of names and id
        "/{friend-list-id}",
        function (response) {
          if (response && !response.error) {
            //the path to the summery count
            var friendCount = response.summery.totalcount;
            console.log(friendCount);
            //picks a random friend id through on the list
            defriendID = Math.floor(Math.random() * friendCount);
            console.log(defriendID);

          }
        }
      );
    },
    //this pulls the opbject that will be used to build the flashcard with the likes, hometown, about, and picture
    friendInfo : function() {
      FB.api(
        //pulls the defriendID on the specific fields below
        '/'+defriendID,
        'GET',
        //picture is public (it's the profile picture), profile picture call is permission gated
        {"fields":"likes,hometown,about,picture"},
        function(response) {
          //stores the response as an object
          var randoInfo = response;
        }
      );
    },
    //posts the people you should defreind to your feed
    passiveAggressive: function(defriendArray) {
    //the string that is posted
    var badPeople;
    //for loop to put in together
      for (var i = 0; i < defriendArray.length; i++) {
        if (i=0) {
        badPeople += defriendArray[i].name;
        }
        else {
          badPeople += ", ";
          badPeople += defriendArray[i].name;
        }
      }
      //the specific method to post
      FB.ui(
        {
          //method is where it goes
          method: 'feed',
          //these various fields I'm not sure are
          name: 'Defriender',
          link: '',
          picture: 'https://scontent.flnk1-1.fna.fbcdn.net/v/t39.2081-6/c0.0.129.129/p128x128/21880224_127988504589917_7438022567916470272_n.png?oh=befbbe608e57d8edfa519f5f8265c611&oe=5A6DE249',
          caption: '',
          description: 'I should NOT be friends with these people: ' + badPeople,
          message: ''
        },
        function(response) {
          //tells us if it worked
          if (response && response.post_id) {
            alert('Post was published.');
          } else {
            alert('Post was not published.');
          }
        }
      );
    },
    //this will hold the messager method
    defriendToMe: function(defriendArray) {

    }
};
