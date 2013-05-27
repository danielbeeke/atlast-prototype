/********************************************************
 * Filters
 *
 * Filters for the map.
 ********************************************************/
define(['jquery', 'settings'], function($, settingsFabric) {

        $('body').on('popupOpen', function(event) {
          $('.favorites-link.flagged a').on('click', function() {
            favoritesFabric.unflag($(this).attr('data-id'));
            $(this).parent().removeClass('flagged').addClass('not-flagged');
            return false;
          });

          $('.favorites-link.not-flagged a').on('click', function() {
            favoritesFabric.flag($(this).attr('data-id'));
            $(this).parent().addClass('flagged').removeClass('not-flagged');
            return false;
          });
        });

        var favoritesFabric = {
            flag: function(id) {
              $.ajax({
                type: "POST",
                data: {
                  action: 'flag',
                  accessToken: settingsFabric.accessToken,
                },
                url: settingsFabric.api + '/favorites/' + id,
              });
            },
            unflag: function(id) {
              $.ajax({
                type: "POST",
                data: {
                  action: 'unflag',
                  accessToken: settingsFabric.accessToken,
                },
                url: settingsFabric.api + '/favorites/' + id,
              });
            }
        }

        return favoritesFabric;
    }
);
