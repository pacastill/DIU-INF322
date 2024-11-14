import React from 'react';
import Caratula from '../components/mis_caratulas.jsx';

// Arreglo con datos de ejemplo
import { useDatosPrueba } from '../components/datosPrueba.jsx'

import imagesSrc from '../assets/images';
import tiposIcon from '../assets/tipos';

const CaratulasPage = () => {

  const { datosPrueba } = useDatosPrueba();
  const encargado = "Tito";

  return (
    <div className="caratulas-page">
      {datosPrueba.filter((card) => card.contacto === encargado).map((card, index) => (
        <Caratula
          key={index}
          id={card.id}
          title={card.title}
          comunidad={card.comunidad}
          donado={card.donado}
          solicitado={card.solicitado}
          description={card.description}
          lat={card.lat}
          lng={card.lng}
          imageUrl={imagesSrc[card.id]}
          tipo={card.tipo}
          imagenTipo={tiposIcon[card.tipo]}
        />
      ))}
    </div>
  );
};

export default CaratulasPage;