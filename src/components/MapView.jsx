import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = (data) => {
  return (
    <MapContainer center={{ lat: -33.0386458, lng: -71.5811897 }} zoom={13} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={point.type === 'ayuda' ? libreIcon : llenaIcon}
          >
          </Marker>
        ))}
    </MapContainer>
  );
};

export default MapView;
