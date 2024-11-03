import React, { createContext, useContext } from 'react';

// Crea el contexto
const DatosPruebaContexto = createContext();

// Datos globales
const DatosPrueba = [
    {
      id: 1,
      title: "Ayuda con escombros",
      location: "Población Vergara",
      capacity: "0/10",
      description: "Gente joven, traer sus propios materiales y herramientas",
    },
    {
      id: 2,
      title: "Recolección de alimentos",
      location: "Barrio Central",
      capacity: "5/20",
      description: "Recolección de alimentos no perecederos para distribución.",
    },
    {
      id: 3,
      title: "Apoyo médico",
      location: "Sector Norte",
      capacity: "2/8",
      description: "Buscamos voluntarios con experiencia en primeros auxilios.",
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
