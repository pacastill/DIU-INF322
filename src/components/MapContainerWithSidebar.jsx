import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { useDatosPrueba } from '../components/datosPrueba';
import 'leaflet/dist/leaflet.css';
import '../stylesheets/index.scss';

const MapContainerWithSidebar = () => {
  const [selectedData, setSelectedData] = useState(null);
  const navigate = useNavigate();
  const { datosPrueba } = useDatosPrueba();

  const handleMarkerClick = (data) => {
    setSelectedData(data);  // Al hacer click en un marcador, muestra el detalle
  };

  return (
    <div className="map-sidebar-container">
      {/* Mapa */}
      <div className="map-container">
        <MapContainer center={{ lat: -33.0386458, lng: -71.5811897 }} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          {datosPrueba.map((data) => (
            <Marker
              key={data.id}
              position={{ lat: data.lat, lng: data.lng }}
              eventHandlers={{
                click: () => handleMarkerClick(data),
              }}
            >
              <Popup>{data.comunidad}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Barra Lateral */}
      <div className="sidebar-container">
        {selectedData ? (
          <div >
            <h2>{selectedData.comunidad}</h2>
            <p>{selectedData.title}</p>
            <p>{selectedData.description}</p>
            <button onClick={() => navigate(`/detalle/${selectedData.id}`)}>Ver más detalles</button>
          </div>
        ) : (
          <p>Selecciona un marcador para ver más detalles</p>
        )}
      </div>
    </div>
  );
};

export default MapContainerWithSidebar;
