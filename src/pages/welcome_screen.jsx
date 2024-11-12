import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../stylesheets/index.scss';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const [tipoSeleccionado, setTipoSeleccionado] = useState('');

  const seleccionarTipo = (tipo) => {
    setTipoSeleccionado(tipo);
  };

  const manejarIngreso = () => {
    if (tipoSeleccionado === 'Voluntariado') {
      navigate('/maps'); // Redirige a la página de voluntariado
    } else if (tipoSeleccionado === 'Local') {
      navigate('/mis-caratulas');
    } else {
      alert('Por favor selecciona un tipo de organización'); // Si no se ha seleccionado ninguna opción
    }
  };

  return (
    <div className='welcome_screen'>
      <h3>¿De qué tipo de organización eres miembro?</h3>
      <div className="botones-seleccion">
        <button
          className={tipoSeleccionado === 'Voluntariado' ? 'boton-seleccionado' : 'boton'}
          onClick={() => seleccionarTipo('Voluntariado')}
        >
          Voluntariado
        </button>
        <button
          className={tipoSeleccionado === 'Local' ? 'boton-seleccionado' : 'boton'}
          onClick={() => seleccionarTipo('Local')}
        >
          Local
        </button>
      </div>
      <button onClick={manejarIngreso} className="boton-ingresar">
        Ingresar
      </button>
    </div>
  )
}

export default WelcomeScreen