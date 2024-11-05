import React, { useState, useEffect, useRef, useMemo,useCallback } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { rojaIcon } from "./Icons";
import VenueMarkers from "./VenueMarkers";
import MarkerPopup from "./MarkerPopup";
import { useDatosPrueba } from '../components/datosPrueba.jsx'


const MapView = ({ direccion, onCoordenadas }) => {
    const [position, setPosition] = useState({ lat: -33.0386458, lng: -71.5811897 });  // Posición inicial
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
            <MarkerPopup direccion={point.direccion} description={point.description} id={point.id} />
          </Marker>
          
        ))}
        
        </MapContainer>
    );
};

export default MapView;
