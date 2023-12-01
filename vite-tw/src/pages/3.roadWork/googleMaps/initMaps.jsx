// Create the DIV to hold the control and call the TrafficConstruct()
// constructor passing in this DIV.
// https://lastexiler.wordpress.com/2016/08/02/custom-controls-google-maps-apis/
function initCutstomBox() {
    var trafficLayer = new google.maps.TrafficLayer();
    var trafficControlDiv = document.createElement('div');
    var trafficConstruct = new TrafficConstruct(trafficControlDiv,
       map, trafficLayer);
 
    trafficLayer.setMap(map);
    trafficControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(trafficControlDiv);
 }
 
 function TrafficConstruct(controlDiv, map, trafficLayer) {
     // Set CSS for the control border
     var trafficUI = document.createElement('div');
     trafficUI.id = 'trafficButtonUI';
     trafficUI.title = 'Click to toggle traffic layer';
     controlDiv.appendChild(trafficUI);
 
     // Set CSS for the control interior
     var trafficText = document.createElement('div');
     trafficText.id = 'trafficButtonText';
     trafficText.innerHTML = 'Traffic';
     trafficText.style.fontWeight = 'bold';
     trafficUI.appendChild(trafficText);
 
     // Set up the click event listener for show traffic table
     // Toggle the traffic layer
     trafficUI.addEventListener('click', function(){
         var trafficState = trafficLayer.getMap();
         if ( trafficState != null){
             trafficLayer.setMap(null);
             trafficText.style.fontWeight = 'normal';
         } else {
             trafficLayer.setMap(map);
             trafficText.style.fontWeight = 'bold';
         }
     });
 }

 export default TrafficConstruct;