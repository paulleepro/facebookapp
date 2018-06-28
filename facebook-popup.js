window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
        appId      : '225273678199615',                    // App ID from the app dashboard
        status     : true,                                 // Check Facebook Login status
        xfbml      : true,                                  // Look for social plugins on the page
        oauth      : true                                  // Enable oauth authentication
    });

    FB.getLoginStatus(function(response) {
        console.log(response);
    });

    // Additional initialization code such as adding Event Listeners goes here
    console.log("hi");
    FB.login(function(response)
    {
        
        if (response.authResponse)
        {
            console.log(response.authResponse.accessToken);

            var opts = {
                message : 'Photo upload',
                access_token: response.authResponse.accessToken,
                url : 'http://static.dezeen.com/uploads/2013/03/dezeen_Sergio-concept-car-by-Pininfarina_ss_4.jpg'
            };

            alert('logged in');
        }else{
            alert('Not logged in');
        }
    }, { scope : 'email, user_posts, user_friends,' });

};

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
