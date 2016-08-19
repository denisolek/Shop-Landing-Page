function initMap() {
  var marker_orbi = {lat: 52.739058, lng: 15.211963};
  var marker_kupiec = {lat: 52.756532, lng: 15.253622};
  var marker_center = {lat: 52.748208, lng: 15.232932};

  var map = new google.maps.Map(document.getElementById('map-container'), {
    zoom: 13,
    center: marker_center
  });

  var content_orbi = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading">Oltex - Orbi</h4>'+
            '<div id="bodyContent">'+
            '<p>Punkt umieszczony w hali targowej <b><i>Orbi</i></b>.<br />' +
            '<b>ul. Marcinkowskiego 90A</b><br />'+
            '<img src="img/orbi.png" style="width: 237px; height: auto;" align="middle"></img>'
            '</div>'+
            '</div>';

  var infowindow_orbi = new google.maps.InfoWindow({
          content: content_orbi
        });

  var content_kupiec = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading">Oltex - Kupiec Gorzowski</h4>'+
            '<div id="bodyContent">'+
            '<p>Punkt umieszczony w centrum handlowym <br /><b><i>Kupiec Gorzowski</i></b>.<br />' +
            '<b>ul. Witosa 50</b><br />'+
            '<img src="img/kupiec.jpg" style="width: 237px; height: auto;" align="middle"></img>'
            '</div>'+
            '</div>';

  var infowindow_kupiec = new google.maps.InfoWindow({
          content: content_kupiec
        });

  var marker_orbi = new google.maps.Marker({
    position: marker_orbi,
    map: map,
    title: 'Oltex - Orbi'
  });
  marker_orbi.addListener('click', function() {
    infowindow_orbi.open(map, marker_orbi);
  });

  var marker_kupiec = new google.maps.Marker({
    position: marker_kupiec,
    map: map,
    title: 'Oltex - Kupiec Gorzowski'
  });
  marker_kupiec.addListener('click', function() {
    infowindow_kupiec.open(map, marker_kupiec);
  });
}
