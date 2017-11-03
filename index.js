var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'P34BgGOeAXDsEXcG5WRGGUkWm',
  consumer_secret: '9SEOAxKAsNjYHTnpWOHBpWijZq6xAXnmVgAFjEnl0eiGLk7IJO',
  access_token_key: '1453539744-vvB4EjBjRzImbeX4RMTdlqh0jvmipeEBAirQ53V',
  access_token_secret: 'QeCAct0qSUSREuyYcwcN4tUFObiB3YdSeL0TEhhhiWnK4'
});
 
var params = {screen_name: 'muhsin_khalif'};
var one_way_followers = [];
client.get('followers/ids', params, function(error, followers_result, response) {
  if (error) {
    throw error;
  }
  var followers = followers_result.ids;
  client.get('friends/ids', params,function(error,following_results,response){
    if (error) 
    throw error;
  
    var following = following_results.ids;
    following.forEach(function(person){
        if (followers.indexOf(person) === -1){
          one_way_followers.push(person);
        }
    });
    
    console.log(one_way_followers);


  });

});

// Get a list of all muhsin's followers

    //Get a list of all muhsin's following
        
        //iterate thru following, and see who is not following back
        
        //display the list