//deleted facebook scrip need a login, next person and a materialize function for this file



var name;
var tweeterUsername;



function newfriend(owner){
  var requestURL = "https://api.twitter.com/1.1/friends/list.json?cursor=-1&screen_name="+owner+"&count=200";
  var rando = Math.floor(Math.random() * 199);
  $.ajax({
    url: requestURL,
    datatype: 'json',
    success: function(data) {
      var friend = data.users[rando];
      console.log(friend);
    }
  });
};

function getTweets(tweeter){
  var requestURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=3&user_id="+tweeter;
  $.ajax({
    url: requestURL,
    datatype: 'json',
    success: function(data) {
      $.post( "/api/tweet", function( tweets ) {
          for (var i = 0; i < tweets.length; i++) {
            //a write function for each tweet
          }
      });
    }
  });
};



$("#submit").on("click", function() {
  var field = $('#form1').val();
  if (name===NULL) {
    alert("please login to get a tweet")
  }
  else{
    if (field === name){
      alert("correct")
    }
    else{
      alert("You might want to unfollow them")
    }
  }
});

$("#loginButton").on("click",function(){
  console.log("click");
  tweeterUsername = $("#loginForm").val();
  if (tweeterUsername == null){
    alert("Please put in a user name");
    console.log(tweeterUsername)
  }
  else {
    newfriend(tweeterUsername);
    console.log(tweeterUsername)
  }
})
