import React from 'react'
import { GoogleMap, TrafficLayer, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '700px'
};

const center = {
  lat: 35.091801,
  lng: -92.436699
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAjXszlr_LeAZ8G9K-t0EPr39xmuZBUspY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  //var trafficLayer = new google.maps.TrafficLayer();
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
      > 
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

// https://stackoverflow.com/questions/38543164/adding-layer-to-google-map-adding-toggle-for-traffic-layer