import React, { useState, useEffect, useRef, useMemo,useCallback } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { rojaIcon } from "./Icons";
import VenueMarkers from "./VenueMarkers";
import MarkerPopup from "./MarkerPopup";
import { useDatosPrueba } from '../components/datosPrueba.jsx'


const MapView = ({ direccion, onCoordenadas }) => {
    const [position, setPosition] = useState({ lat: -33.0386458, lng: -71.5811897 });  // Posición inicial
    const markers = [
      { id: 1, lat: -33.0441, lng: -71.6183, type: 'Llena', direccion: 'Calle San Martín 130' }, 
      { id: 2, lat: -33.0453, lng: -71.6310, type: 'Libre', direccion: 'Calle Errázuriz 1980' }, 
      { id: 3, lat: -33.0467, lng: -71.6295, type: 'Llena', direccion: 'Calle Del Parque 600' }, 
      { id: 4, lat: -33.0481, lng: -71.6125, type: 'Libre', direccion: 'Calle Condell 155' }, 
      { id: 5, lat: -33.0475, lng: -71.6195, type: 'Llena', direccion: 'Calle Lota 190' }, 
      { id: 6, lat: -33.0500, lng: -71.6200, type: 'Libre', direccion: 'Calle Colón 123' }, 
      { id: 7, lat: -33.0387, lng: -71.6041, type: 'Llena', direccion: 'Calle Blanco 450' }, 
      { id: 8, lat: -33.0375, lng: -71.603, type: 'Libre', direccion: 'Calle Bellavista 789' }, 
      { id: 9, lat: -33.0354, lng: -71.5560, type: 'Llena', direccion: 'Calle Cumming 1025' }, 
      { id: 10, lat: -33.0338, lng: -71.5115, type: 'Libre', direccion: 'Calle Esmeralda 520' }, 
      { id: 11, lat: -33.0247, lng: -71.5519, type: 'Llena', direccion: 'Calle 15 Norte 100' }, 
      { id: 12, lat: -33.0243, lng: -71.5480, type: 'Libre', direccion: 'Calle Libertad 200' }, 
      { id: 13, lat: -33.0222, lng: -71.5540, type: 'Llena', direccion: 'Calle 6 Norte 456' }, 
      { id: 14, lat: -33.0215, lng: -71.5429, type: 'Libre', direccion: 'Avenida Perú 305' }, 
      { id: 15, lat: -33.0257, lng: -71.5412, type: 'Llena', direccion: 'Calle Valparaíso 600' }, 
      { id: 16, lat: -33.0295, lng: -71.5350, type: 'Libre', direccion: 'Avenida Marina 765' }, 
      { id: 17, lat: -33.0328, lng: -71.5337, type: 'Llena', direccion: 'Calle 1 Poniente 234' }, 
      { id: 18, lat: -33.0284, lng: -71.5295, type: 'Libre', direccion: 'Calle 3 Poniente 870' }, 
      { id: 19, lat: -33.0471, lng: -71.6110, type: 'Llena', direccion: 'Calle Almirante Montt 109' }, 
      { id: 20, lat: -33.0542, lng: -71.562, type: 'Libre', direccion: 'Calle Serrano 302' }, 
      { id: 21, lat: -33.0305, lng: -71.6387, type: 'Llena', direccion: 'Calle Argentina 1235' }, 
      { id: 22, lat: -33.0512, lng: -71.6001, type: 'Libre', direccion: 'Calle Baquedano 157' }, 
      { id: 23, lat: -33.0345, lng: -71.5939, type: 'Llena', direccion: 'Calle Independencia 850' }, 
      { id: 24, lat: -33.0331, lng: -71.5824, type: 'Libre', direccion: 'Calle Playa Ancha 678' }, 
      { id: 25, lat: -33.0281, lng: -71.5220, type: 'Llena', direccion: 'Calle Francia 2300' }, 
    ];
    const arreglo = useDatosPrueba();

    return (
        <MapContainer center={position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {arreglo.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={rojaIcon}
          >
            <MarkerPopup props={point.direccion} />
          </Marker>
          
        ))}
        
        </MapContainer>
    );
};

export default MapView;
