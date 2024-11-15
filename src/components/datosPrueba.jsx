import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const DatosPruebaContexto = createContext();

// Datos globales
const DatosPrueba = [
    {
      id: 1,
      title: "Ayuda con escombros",
      comunidad: "Población Vergara",
      encargado: "Tito",
      contacto: "912345678",
      direccion: "Jorge Kenrick 780",
      alimento_donado: 9,
      alimento_solicitado: 15,
      bebestible_donado: 9,
      bebestible_solicitado: 10,
      insumo_donado: 9,
      insumo_solicitado: 10,
      mano_donado: 9,
      mano_solicitado: 10,
      vestuario_donado: 9,
      vestuario_solicitado: 10,
      description: "Gente joven, traer sus propios materiales y herramientas. Traer: Guantes, Casco, Pala",
      lat: -33.0598468, lng: -71.5913598,
    },
    {
      id: 2,
      title: "Recolección de alimentos",
      comunidad: "Barrio Central",
      encargado: "Pali",
      contacto: "912345678",
      direccion: "Los Placeres 466, Valparaíso",
      alimento_donado: 9,
      alimento_solicitado: 10,
      bebestible_donado: 9,
      bebestible_solicitado: 10,
      insumo_donado: 9,
      insumo_solicitado: 10,
      mano_donado: 9,
      mano_solicitado: 10,
      vestuario_donado: 9,
      vestuario_solicitado: 10,
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
      alimento_donado: 5,
      alimento_solicitado: 10,
      bebestible_donado: 5,
      bebestible_solicitado: 10,
      insumo_donado: 5,
      insumo_solicitado: 10,
      mano_donado: 5,
      mano_solicitado: 10,
      vestuario_donado: 5,
      vestuario_solicitado: 10,
      description: "Necesitamos donaciones de insumos médicos e insumos para primeros auxilios.",
      lat: -33.0343542, lng: -71.597239,
    },
    {
      id: 4,
      title: "Se necesita apoyo médico",
      comunidad: "Sector Sur",
      encargado: "Tito",
      contacto: "912345678",
      direccion: "Carmen 426",
      alimento_donado: 0,
      alimento_solicitado: 10,
      bebestible_donado: 9,
      bebestible_solicitado: 10,
      insumo_donado: 2,
      insumo_solicitado: 10,
      mano_donado: 9,
      mano_solicitado: 10,
      vestuario_donado: 7,
      vestuario_solicitado: 10,
      description: "Buscamos donaciones de insumos médicos e insumos para primeros auxilios.",
      lat: -33.0343542, lng: -71.5975366,
    },
    {
      id: 5,
      title: "Apoyo médico",
      comunidad: "Sector Centro",
      encargado: "Pali",
      contacto: "912345678",
      direccion: "Av. Argentina 847",
      alimento_donado: 3,
      alimento_solicitado: 10,
      bebestible_donado: 3,
      bebestible_solicitado: 10,
      insumo_donado: 3,
      insumo_solicitado: 10,
      mano_donado: 3,
      mano_solicitado: 10,
      vestuario_donado: 3,
      vestuario_solicitado: 10,
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

  const modificarDato = (id,nuevosDatos) => {
    console.log(nuevosDatos)
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
