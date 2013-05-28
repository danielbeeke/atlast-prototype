/********************************************************
 * Facebook
 *
 * Loggin on to facebook.
 ********************************************************/
define(['jquery', 'settings'], function($, settingsFabric) {

        var facebookFabric = {
            init: function(callbackFunction) {

              $('.facebook-login-menu-item').show();
              $('.facebook-logout-menu-item').hide();

              window.fbAsyncInit = function() {
              FB.init({
                appId      : '200058723477428', // App ID
                channelUrl : '//atlastapp.local/channel.html', // Channel File
                status     : true, // check login status
                cookie     : true, // enable cookies to allow the server to access the session
                xfbml      : true  // parse XFBML
              });

              FB.Event.subscribe('auth.authResponseChange', function(response) {
                if (response.status === 'connected') {
                  // Hide the inactive menu item.
                  $('.facebook-login-menu-item').hide();
                  $('.facebook-logout-menu-item').show();

                  settingsFabric.accessToken = response.authResponse.accessToken;

                  callbackFunction();
                } else if (response.status === 'not_authorized') {
                  FB.login();
                  callbackFunction();
                } else {
                  FB.login();
                  callbackFunction();
                }
              });
              };

              // Load the SDK asynchronously
              (function(d){
               var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement('script'); js.id = id; js.async = true;
               js.src = "//connect.facebook.net/en_US/all.js";
               ref.parentNode.insertBefore(js, ref);
              }(document));

            }
        }

        return facebookFabric;
}
);
