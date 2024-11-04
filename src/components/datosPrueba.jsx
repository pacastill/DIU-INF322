import React, { createContext, useContext } from 'react';

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
      donado: 8,
      solicitado: 10,
      description: "Gente joven, traer sus propios materiales y herramientas. Traer:\n-Guantes\n-Casco\n-Pala",
    },
    {
      id: 2,
      title: "Recolección de alimentos",
      comunidad: "Barrio Central",
      encargado: "Pali",
      contacto: "912345678",
      direccion: "Los Placeres 466, Valparaíso",
      tipo: "Alimentos no perecibles",
      donado: 5,
      solicitado: 15,
      description: "Recolección de alimentos no perecederos para distribución.",
    },
    {
      id: 3,
      title: "Apoyo médico",
      comunidad: "Sector Norte",
      encargado: "Marti",
      contacto: "912345678",
      direccion: "Av. España 1680",
      tipo: "Insumos médicos",
      donado: 0,
      solicitado: 20,
      description: "Buscamos donaciones de insumos médicos e insumos para primeros auxilios.",
    },
];

// Proveedor del contexto
export const DatosPruebaProvider = ({ children }) => (
  <DatosPruebaContexto.Provider value={DatosPrueba}>
    {children}
  </DatosPruebaContexto.Provider>
);

// Custom hook para usar el contexto
export const useDatosPrueba = () => useContext(DatosPruebaContexto);
