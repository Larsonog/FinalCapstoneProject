import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function ConwayMap() {
  const conwayPosition = [35.0887, -92.4421];

  // an array of walk-in clinic locations with coordinates and labels
  const walkInClinicsLoc = [
    { name: 'Medcare Urgent Express', coordinates: [35.09176934180663, -92.43467766052645] },
    { name: 'Primecare Medical Clinic', coordinates: [35.09220827463228, -92.43614751101053] },
    { name: 'Conway Family Practice Clinic', coordinates: [35.09087158632688, -92.44303638483913] },
    { name:'Baptist Health Urgent Care- Conway North', coordinates:[35.110742608038734, -92.43901134435995]},
    { name:'Conway Regional Afterhours clinic', coordinates:[35.08448471767092, -92.46562988668869]},
    { name:'Baptist Health Urgent Care- Conway South', coordinates:[35.06732266774769, -92.42649868853822]},
    { name:'Conway Regional Hendrix Medical Clinic', coordinates:[35.10308350572973, -92.4383924866887]},
    { name:'College Park Family Clinic', coordinates:[35.084844449661574, -92.46373454435997]},
    { name:'Conway Emergency Physicans', coordinates:[35.086129558367716, -92.45758619833217]},
    { name:'Conway Regional Medical Clinic- Prince Street', coordinates:[35.091815097457165, -92.46040108483913]},
    { name:'PrimeCare Medical Clinic- Salem', coordinates:[35.091815097457165, -92.46040108483913]},
    { name:'Conway Regional Family Clinic', coordinates:[35.085699697142466, -92.47420409723976]},
    { name:'AR Conway Pharmacy', coordinates:[35.09965185650185, -92.41809793086695]},
    { name:'Conway Family Care', coordinates:[35.08596607243892, -92.49064564251043]},
    { name:'Conway Medical Group- Conway Regional', coordinates:[35.084284328206145, -92.46561372901739]}

  ];

  return (
    <MapContainer center={conwayPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Map through the second-hand shop locations and create markers with popups */}
      {walkInClinicsLoc.map((shop, index) => (
        <Marker key={index} position={shop.coordinates}>
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ConwayMap;
