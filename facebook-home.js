window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
        appId      : '225273678199615',                    // App ID from the app dashboard
        status     : true,                                 // Check Facebook Login status
        xfbml      : true,                                  // Look for social plugins on the page
        oauth      : true                                  // Enable oauth authentication
    });

    // Additional initialization code such as adding Event Listeners goes here
    console.log(FB);
    $(document).ready(function(){
        alert();
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
