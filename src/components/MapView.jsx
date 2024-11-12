import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { rojaIcon, amarilloIcon, verdeIcon } from "./Icons";
import MarkerPopup from "./MarkerPopup";
import { useDatosPrueba } from '../components/datosPrueba';

const MapView = ({ direccion, onCoordenadas }) => {
    const [position, setPosition] = useState({ lat: -33.0386458, lng: -71.5811897 });
    const { datosPrueba }  = useDatosPrueba();

    return (
        <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {datosPrueba.map((point) => {
                const porcentaje = point.donado / point.solicitado;
                let icon;
                if (porcentaje < 1/3) {
                    icon = rojaIcon;  // Menor a 1/3
                } else if (porcentaje < 2/3) {
                    icon = amarilloIcon;  // Entre 1/3 y 2/3
                } else {
                    icon = verdeIcon;  // Mayor a 2/3
                }

                return (
                    <Marker
                        key={point.id}
                        position={[point.lat, point.lng]}
                        icon={icon}
                    >
                        <MarkerPopup direccion={point.direccion} description={point.description} id={point.id} />
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default MapView;
