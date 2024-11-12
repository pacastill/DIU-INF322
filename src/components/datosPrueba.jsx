import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const DatosPruebaContexto = createContext();

// Datos globales
const DatosPrueba = [
    {
      id: 1,
      title: "Ayuda con escombros",
      comunidad: "Población Vergara",
      encargado: "912345678",
      contacto: "Tito",
      direccion: "Jorge Kenrick 780",
      tipo: "Mano de obra",
      donado: 9,
      solicitado: 10,
      description: "Gente joven, traer sus propios materiales y herramientas. Traer:\n-Guantes\n-Casco\n-Pala",
      lat: -33.0598468, lng: -71.5913598,
    },
    {
      id: 2,
      title: "Recolección de alimentos",
      comunidad: "Barrio Central",
      encargado: "Pali",
      contacto: "912345678",
      direccion: "Los Placeres 466, Valparaíso",
      tipo: "Alimentos no perecibles",
      donado: 1,
      solicitado: 15,
      description: "Recolección de alimentos no perecederos para distribución.",
      lat: -33.0365761, lng: -71.5971082,
    },
    {
      id: 3,
      title: "Apoyo médico",
      comunidad: "Sector Norte",
      encargado: "Marti",
      contacto: "912345678",
      direccion: "Av. España 1680",
      tipo: "Insumos médicos",
      donado: 8,
      solicitado: 20,
      description: "Buscamos donaciones de insumos médicos e insumos para primeros auxilios.",
      lat: -33.0343542, lng: -71.5972368,
    },
];

// Proveedor del contexto
export const DatosPruebaProvider = ({ children }) => {
  const [datosPrueba, setDatosPrueba] = useState(DatosPrueba);

  // Función para añadir nuevos datos
  const agregarDato = (nuevoDato) => {
    setDatosPrueba([...datosPrueba, { ...nuevoDato, id: Date.now() }]); //, id: Date.now() -> para id único!
  };

  const modificarDato = (id, nuevosDatos) => {
    setDatosPrueba((prevDatos) =>
      prevDatos.map((dato) => (dato.id === id ? { ...dato, ...nuevosDatos } : dato))
    );
  };

  return (
    <DatosPruebaContexto.Provider value={{ datosPrueba, agregarDato, modificarDato }}>
      {children}
    </DatosPruebaContexto.Provider>
  );
};

// Custom hook para usar el contexto
export const useDatosPrueba = () => useContext(DatosPruebaContexto);
