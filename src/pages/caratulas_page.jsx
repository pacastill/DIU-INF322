import React from 'react';
import Caratula from '../components/caratula.jsx';

// Arreglo con datos de ejemplo
import { useDatosPrueba } from '../components/datosPrueba.jsx'

const CaratulasPage = () => {

  const datos = useDatosPrueba();

  return (
    <div className="caratulas-page">
      {datos.map((card, index) => (
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