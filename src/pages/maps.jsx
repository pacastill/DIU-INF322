import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapView from '../components/MapView';

const MapPage = () => {
  return (
    <div style={container_styles}>
      <MapView/>
    </div>
  );
};



export default MapPage;

const container_styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '94.9vh',
};