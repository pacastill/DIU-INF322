import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { rojaIcon } from "./Icons";

const MapView = ({ direccion, onCoordenadas }) => {
  const [position, setPosition] = useState({ lat: -33.0386458, lng: -71.5811897 });  // Posición inicial

  const MoveMapToLocation = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.setView(position, 14);
      }
    }, [map, position]);
    return null;
  };

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(true)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            onCoordenadas(marker.getLatLng());
          }
        },
      }),
      [onCoordenadas],
    )

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={rojaIcon}>
      </Marker>
    )
  }

  useEffect(() => {
    if (direccion) {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            const coords = { lat: parseFloat(lat), lng: parseFloat(lon) };
            setPosition(coords);
            //onCoordenadas(coords);  // Llama a la función para guardar las coordenadas en CrearPeticion
          } else {
            alert("Dirección no encontrada.");
          }
        })
        .catch(error => console.error("Error en la geocodificación:", error));
    }
  }, [direccion, onCoordenadas]);

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <DraggableMarker />
      <MoveMapToLocation position={position} />
    </MapContainer>
  );
};

export default MapView;
