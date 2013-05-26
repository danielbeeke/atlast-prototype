/********************************************************
 * Settings
 *
 * A general settings file, different for each instance.
 ********************************************************/
define(['jquery'], function($) {

        var settingsFabric = {
            instanceId: 1,
            api: 'http://atlast.dev.local/api/v1',
            init: function(nextFunction) {
              // Getting the settings.
              $.ajax({
                type: "GET",
                url: settingsFabric.api + '/instance/' + settingsFabric.instanceId,
              }).done(function( json ) {
                $.extend(settingsFabric, json);
                nextFunction();
              });
            }
        }

        return settingsFabric;
    }
);