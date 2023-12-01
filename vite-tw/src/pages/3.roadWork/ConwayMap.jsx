import React, { useEffect, useRef } from 'react';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer } from 'react-leaflet';


// Set your MapQuest API key here
const apiKey = 'kRhaZ53vaQdSn1jTlnffykgLaJDPJ0nF';
MQ.key = apiKey;

function ConwayMap() {
  const mapRef = useRef();

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    const directions = MQ.routing.directions();

    // Set your MapQuest start and end coordinates here
    directions.route({
      locations: [
        'New York, NY',
        'Los Angeles, CA',
      ],
    });

    MQ.routing.routeLayer({
      directions: directions,
    }).addTo(map);
  }, []);

  return (
    <LMap
      ref={mapRef}
      center={[40.7128, -74.0060]}
      zoom={5}
      style={{ width: '100%', height: '400px' }}
    >
      <LTileLayer
        url="http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg"
        subdomains="1234"
      />
    </LMap>
  );
}

export default ConwayMap;

// Trying MapQuest API for leaflet