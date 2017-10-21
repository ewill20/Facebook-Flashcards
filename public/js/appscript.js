//deleted facebook scrip need a login, next person and a materialize function for this file
var tesstingKey = {
  consumer_key: 'NgGqbR8F85loJl94y5EHCMftY',
  consumer_secret: 'qLQnSgA7E779cMpZytbryItytWvLtOBZPHZ8AJiLuqwiiIqeAO',
  access_token_key: '904081013080514561-ARGWtmywiAsSgJwbmiZj5axDuQCUS5S',
  access_token_secret: 'zhXiHrym1eUXuAwxRuv961omt2glx83kAdJC4gErHuOju'
}

var name;

function newfriend(){
  var requestURL = "https://api.twitter.com/1.1/friends/list.json?cursor=-1&screen_name=twitterap&count=200";
  var rando = Math.floor(Math.random() * 199);
  $.ajax({
    url: requestURL,
    datatype: 'json',
    success: function(data) {
      var friend = data.users[rando];
      $.post( "/api/tweet", function( friend ) {
          $( ".result" ).html( friend );
      });
    }
  });
};

function getTweets(tweeter){
  var requestURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=3&user_id="+tweeter+;
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

function WriteStuff(){
  $.get( "./api/tweet", function( data ) {
    //write the photo object is profile_image_url
    //write in the banner, the object is profile_background_image_url_https
    name = data.name.
  });
};

$("#submit").on("click", function() {
  var field = $('#form1').val();
  if (name===NULL) {
    alert("please hit skip to get a tweet")
  }
  else{
    if (field === name){
      alert("correct")
    }
    else{
      alert("You might want to unfollow them")
    }
  }
})
