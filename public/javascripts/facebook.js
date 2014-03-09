$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_UK/all.js', function(){
    FB.init({
      appId: '806409716039914',
      status: true
    });  
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(function (response) {
                if (response.authResponse) {
                    console.log(response.authResponse.accessToken);
                } else {
                    console.log(response);
                };
            });
    FB.api('/232720656823296', 'get', function(response) {
    	//do something with the FB response
    	console.log(response);
    });
  });
});