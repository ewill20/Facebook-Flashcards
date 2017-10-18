window.fbAsyncInit = function() {
  FB.init({
    appId            : '127978641257570',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.10'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

//picks a random friend

function friend() {
  FB.api('/me/name', function(response) {
      if(response.data) {
        console.log(response);
      } else {
          alert("Error!");
      }
  });
};
//pulls their info
function randoInfo(defriendID){
  FB.api(
    //pulls the defriendID on the specific fields below
    '/'+defriendID,
    'GET',
    //picture is public (it's the profile picture), profile picture call is permission gated
    {"fields":"likes,hometown,about,picture"},
    function(response) {
      //stores the response as an object
      var randoInfo = response;
      return randoInfo;
    }
  );
};
//posts on the feed, we also do NOT have persmission for that right now.
function feedPost(defriendArray){
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
};



 $("#fbLogin").click(function() {
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
 });
//Right now this function goes to a dead end until a new person button is added
 $("#newGuy").click(function() {
   var packet = friend();
   console.log(packet);
 })
