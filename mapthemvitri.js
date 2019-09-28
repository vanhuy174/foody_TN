      var map;
      var marker;
      var infowindow;
      var messagewindow;

      var i=0;

      function initMap() {
        var california = {lat: 21.585329, lng: 105.806853};
        map = new google.maps.Map(document.getElementById('map'), {
          center: california,
          zoom: 15
        });

        infoWindow = new google.maps.InfoWindow;

        // infowindow = new google.maps.InfoWindow({
        //   content: document.getElementById('form')
        // });

        // messagewindow = new google.maps.InfoWindow({
        //   content: document.getElementById('message')
        // });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent('Vị trí của bạn.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        google.maps.event.addListener(map, 'click', function(event) {
          if (i>0) {
             marker.setMap(null);
             i=0;
          }
            i++;
            marker = new google.maps.Marker({
              position: event.latLng,
              map: map
            });

            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map, marker);
            });
            var latlng = marker.getPosition();
            console.log(latlng.lat());
            $("#vido").val(latlng.lat());
            $("#kinhdo").val(latlng.lng());
            
        });
      }
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
          infoWindow.open(map);
        }


      // function saveData() {
      //   var name = document.getElementById('name').value;
      //   var address = document.getElementById('address').value;
      //   var type = document.getElementById('type').value;
      //   var latlng = marker.getPosition();
      //   var url = 'phpsqlinfo_addrow.php?name=' + name + '&address=' + address +
      //             '&type=' + type + '&lat=' + latlng.lat() + '&lng=' + latlng.lng();

      //   downloadUrl(url, function(data, responseCode) {

      //     if (responseCode == 200 && data.length <= 1) {
      //       infowindow.close();
      //       messagewindow.open(map, marker);
      //     }
      //   });
      // }

      // function downloadUrl(url, callback) {
      //   var request = window.ActiveXObject ?
      //       new ActiveXObject('Microsoft.XMLHTTP') :
      //       new XMLHttpRequest;

      //   request.onreadystatechange = function() {
      //     if (request.readyState == 4) {
      //       request.onreadystatechange = doNothing;
      //       callback(request.responseText, request.status);
      //     }
      //   };

      //   request.open('GET', url, true);
      //   request.send(null);
      // }

      function doNothing () {
      }