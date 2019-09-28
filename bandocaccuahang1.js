

var customLabel = {
  '1': {
    label: 'F'
  },
  '2': {
    label: 'D'
  },
  '3': {
    label: 'L'
  },
  '4': {
    label: 'N'
  },
  '5': {
    label: 'S'
  },
};
 if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
            //lay toa do de gui cho controller
            lat1=position.coords.latitude;
            lng1=position.coords.longitude;
            var url = 'index.php?action=ajax';
            var success = function (res) {
              console.log(res);
            }
            var data = {
              lat: lat1,
              lng: lng1
            }
            $.post(url,data,success);
            console.log(data);
            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Vị trí của bạn.');
            // infoWindow.open(map);
            // map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });

  } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

function initMap() {
  var lat1, lng1;
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(21.585329, 105.806853),
    zoom: 15
  });
  var infoWindow = new google.maps.InfoWindow;
  //lấy vị  trí.
    
              //hiển thịn các dịa điểm lên bản đồ.
              downloadUrl('res/DOM/DOMquanan.xml', function(data) {
                var xml = data.responseXML;
                var markers = xml.documentElement.getElementsByTagName('marker');
                Array.prototype.forEach.call(markers, function(markerElem) {
                  var id = markerElem.getAttribute('id');
                  var name = markerElem.getAttribute('name');
                  //var name =20;
                  //console.log(name);
                  var address = markerElem.getAttribute('address');
                  var type = markerElem.getAttribute('type');
                  //console.log(type);
                  var point = new google.maps.LatLng(
                    parseFloat(markerElem.getAttribute('lat')),
                    parseFloat(markerElem.getAttribute('lng')));

                  var infowincontent = document.createElement('div');
                  var strong = document.createElement('strong');
                  strong.textContent = name
                  infowincontent.appendChild(strong);
                  infowincontent.appendChild(document.createElement('br'));

                  var text = document.createElement('text');
                  text.textContent = address
                  infowincontent.appendChild(text);
                  var icon = customLabel[type] || {};
                  var marker = new google.maps.Marker({
                    map: map,
                    position: point,
                    label: icon.label
                  });
                  marker.addListener('click', function() {
                    infoWindow.setContent(infowincontent);
                    infoWindow.open(map, marker);
                  });
                });
              });
              //kết thúc hiển thị vị trí lên bản đồ.
         
          // Change this depending on the name of your PHP or XML file   
        }

        //láy dũ liệu file xml.
        function downloadUrl(url, callback) {
          var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

          request.onreadystatechange = function() {
            if (request.readyState == 4) {
              request.onreadystatechange = doNothing;
              callback(request, request.status);
            }
          };

          request.open('GET', url, true);
          request.send(null);
        }

        function doNothing() {
        // var url = 'index.php?action=aa';
        // var success = function (res) {
        //   console.log(res);
        // }
        // $.get(url,success);
      }