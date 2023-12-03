import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function ConwayMap() {
  const conwayPosition = [35.0887, -92.4421];

  // Define an array of second-hand shop locations with coordinates and labels
  const secondHandShops = [
    { name: 'Mikes Place', coordinates: [35.08989334054979, -92.44034683223524] },
    { name: 'BMB Creations Bakery', coordinates: [35.090286049774704, -92.43920770524913] },
    { name: 'Cross Creek Sandwhich Shop', coordinates: [35.09138311987305, -92.4389370322352] },
    // Add more shops as needed
  ];

  return (
    <MapContainer center={conwayPosition} zoom={15} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Map through the second-hand shop locations and create markers with popups */}
      {secondHandShops.map((shop, index) => (
        <Marker key={index} position={shop.coordinates}>
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ConwayMap;
