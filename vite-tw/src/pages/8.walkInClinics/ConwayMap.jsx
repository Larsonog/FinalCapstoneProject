import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom'

function ConwayMap({walkInClinicsLoc}) {
  const conwayPosition = [35.0887, -92.4421];

  return (
    <MapContainer center={conwayPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {walkInClinicsLoc.map((shop, index) => (
        <Marker key={index} position={shop.coordinates}>
          <Popup> 
            {shop.name}
            <div className='small-empty-space' />
            <Link to={shop.locLink}> {shop.address} </Link> 

          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ConwayMap;
