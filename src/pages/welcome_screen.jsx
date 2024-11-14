// WelcomeScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext';  // Importa el contexto

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const { tipoSeleccionado, setTipoSeleccionado } = useUser();  // Usa el contexto

  const seleccionarTipo = (tipo) => {
    setTipoSeleccionado(tipo);  // Actualiza el tipo seleccionado
  };

  const manejarIngreso = () => {
    if (tipoSeleccionado === 'Voluntariado') {
      navigate('/maps');
    } else if (tipoSeleccionado === 'Local') {
      navigate('/mis-caratulas');
    } else {
      alert('Por favor selecciona un tipo de organización');
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
  );
};

export default WelcomeScreen;
