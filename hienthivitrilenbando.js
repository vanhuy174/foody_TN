function initMap() {
  var vido=document.getElementById('vido').value;
  var kinhdo=document.getElementById('kinhdo').value;
  //console.log(vido);
  var uluru = {lat: parseFloat(vido), lng: parseFloat(kinhdo)};
  //var uluru = {lat: 12, lng: 13};
  console.log(uluru);
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom:17, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}