import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapView from '../components/MapView';
import MapContainerWithSidebar from '../components/MapContainerWithSidebar';


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
    height: '92.5vh',
};