import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function ConwayMap() {
  const conwayPosition = [35.0887, -92.4421];

  // Define an array of second-hand shop locations with coordinates and labels
  const secondHandShops = [
    { name: 'Yours Truly Consignment', coordinates: [35.09311809930113, -92.43820158538433] },
    { name: 'The Go Store', coordinates: [35.090765417998554, -92.43837324675474] },
    { name: 'Goodwill- Oak Street', coordinates: [35.091186798743955, -92.42957560152153] },
    { name: 'Dads and Lads Consignment', coordinates:[35.11062146097442, -92.44557790039295]},
    { name: 'Goodwill- Sanders Street', coordinates:[35.1106380472001, -92.43662483141217]},
    { name: 'Magnolias', coordinates:[35.11053272735064, -92.44615203746964]},

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
