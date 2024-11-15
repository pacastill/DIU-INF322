import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { rojaIcon, amarilloIcon, verdeIcon } from "./Icons";
import roja from '../assets/roja.png';
import amarillo from '../assets/amarilla.png';
import verde from '../assets/verde.png';
import MarkerPopup from "./MarkerPopup";
import { useDatosPrueba } from '../components/datosPrueba';

const MapView = ({ direccion, onCoordenadas }) => {
    const [position, setPosition] = useState({ lat: -33.0386458, lng: -71.5811897 });
    const { datosPrueba } = useDatosPrueba();

    // Mueve el mapa a la posición de la dirección proporcionada
    useEffect(() => {
        if (direccion) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const { lat, lon } = data[0];
                        setPosition({ lat: parseFloat(lat), lng: parseFloat(lon) });
                    } else {
                        alert("Dirección no encontrada.");
                    }
                })
                .catch(error => console.error("Error en la geocodificación:", error));
        }
    }, [direccion]);

    // Añadir leyenda al mapa
    const AddLegend = () => {
        const map = useMap();
        useEffect(() => {
            const legend = L.control({ position: 'bottomleft' });

            legend.onAdd = function () {
                const div = L.DomUtil.create('div', 'info legend');
                div.innerHTML = `

                    <img src="${roja}" alt="Roja Icon" style="width: 20px; height: 20px;"/> Alta Prioridad (Ayuda urgente) <br>
                    <img src="${amarillo}" alt="Amarillo Icon" style="width: 20px; height: 20px;"/> Prioridad Media (Aun falta ayuda) <br>
                    <img src="${verde}" alt="Verde Icon" style="width: 20px; height: 20px;"/> Baja prioridad (Ayuda casi completada) <br>
                `;
                return div;
            };

            legend.addTo(map);

            return () => map.removeControl(legend); // Limpiar leyenda cuando el componente se desmonte
        }, [map]);

        return null;
    };

    return (
        <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* Mapa con los puntos de datos */}
            {datosPrueba.map((point) => {
                const total_donado = point.alimento_donado + point.bebestible_donado + point.insumo_donado + point.mano_donado + point.vestuario_donado
                const total_solicitado = point.alimento_solicitado + point.bebestible_solicitado + point.insumo_solicitado + point.mano_solicitado + point.vestuario_solicitado
                const porcentaje = total_donado / total_solicitado;
                let icon;
                if (porcentaje < 1 / 3) {
                    icon = rojaIcon;  // Menor a 1/3
                } else if (porcentaje < 2 / 3) {
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
            
            {/* Agregar la leyenda al mapa */}
            <AddLegend />
        </MapContainer>
    );
};

export default MapView;
