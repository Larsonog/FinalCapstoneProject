import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { rList } from './List';

function ConwayMap() {
  const conwayPosition = [35.0887, -92.4421];
  return (
    <MapContainer center={conwayPosition} zoom={15} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Map through the restuarants locations and create markers with popups */}
      {rList.map((shop, index) => (
        <Marker key={index} position={shop.coordinates}>
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ConwayMap;
