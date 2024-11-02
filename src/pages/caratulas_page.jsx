import React from 'react';
import Caratula from '../components/caratula.jsx';

// Arreglo con datos de ejemplo

const cardData = [
    {
      title: "Ayuda con escombros",
      location: "Población Vergara",
      capacity: "0/10",
      description: "Gente joven, traer sus propios materiales y herramientas",
    },
    {
      title: "Recolección de alimentos",
      location: "Barrio Central",
      capacity: "5/20",
      description: "Recolección de alimentos no perecederos para distribución.",
    },
    {
      title: "Apoyo médico",
      location: "Sector Norte",
      capacity: "2/8",
      description: "Buscamos voluntarios con experiencia en primeros auxilios.",
    },


    {
        title: "Ayuda con escombros",
        location: "Población Vergara",
        capacity: "0/10",
        description: "Gente joven, traer sus propios materiales y herramientas",
      },
      {
        title: "Recolección de alimentos",
        location: "Barrio Central",
        capacity: "5/20",
        description: "Recolección de alimentos no perecederos para distribución.",
      },
      {
        title: "Apoyo médico",
        location: "Sector Norte",
        capacity: "2/8",
        description: "Buscamos voluntarios con experiencia en primeros auxilios.",
      },
    
  ];

const CaratulasPage = () => { 
  return (
    <div className="caratulas-page">
      {cardData.map((card, index) => (
        <Caratula
          key={index}
          title={card.title}
          location={card.location}
          capacity={card.capacity}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CaratulasPage;