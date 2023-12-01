import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function ConwayMap() {
  const conwayPosition = [35.0887, -92.4421];

  // Define an array of second-hand shop locations with coordinates and labels
  const secondHandShops = [
    { name: 'Shop 1', coordinates: [35.0901, -92.4489] },
    { name: 'Shop 2', coordinates: [35.0885, -92.4442] },
    { name: 'Shop 3', coordinates: [35.0863, -92.4381] },
    // Add more shops as needed
  ];

  return (
    <MapContainer center={conwayPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
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
