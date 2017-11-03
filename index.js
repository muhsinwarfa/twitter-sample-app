var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'P34BgGOeAXDsEXcG5WRGGUkWm',
  consumer_secret: '9SEOAxKAsNjYHTnpWOHBpWijZq6xAXnmVgAFjEnl0eiGLk7IJO',
  access_token_key: '1453539744-vvB4EjBjRzImbeX4RMTdlqh0jvmipeEBAirQ53V',
  access_token_secret: 'QeCAct0qSUSREuyYcwcN4tUFObiB3YdSeL0TEhhhiWnK4'
});
 
var params = {screen_name: 'muhsin_khalif'};
var one_way_following = [];
var users_to_display = [];
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
          one_way_following.push(person);
        }
    });
    //only take the first hundred users
    one_way_following = one_way_following.slice(0,99);
    //turn array to string
    var one_way_following_string = one_way_following.join();

    
    client.get('users/lookup', {user_id: one_way_following_string}, function(error,users_results, response){
       users_results.forEach(function(user){
         var userObject = {
           name: user.name,
           screen_name: user.screen_name,
           avatar: user.profile_image_url
           
         }
         
         users_to_display.push(userObject);
       });
       console.log(users_to_display);
    });
    
    


  });

});

