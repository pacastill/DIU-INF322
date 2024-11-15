import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext';  // Importa el contexto

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const { setTipoSeleccionado } = useUser();  // Usa el contexto
  const [tipoTemporal, setTipoTemporal] = useState(null);  // Estado local para el tipo seleccionado temporalmente

  const seleccionarTipo = (tipo) => {
    setTipoTemporal(tipo);  // Actualiza el estado local temporalmente
  };

  const manejarIngreso = () => {
    if (tipoTemporal) {
      setTipoSeleccionado(tipoTemporal);  // Actualiza el estado global en el contexto
      if (tipoTemporal === 'Voluntariado') {
        navigate('/maps');
      } else if (tipoTemporal === 'Local') {
        navigate('/maps');
      }
    } else {
      alert('Por favor selecciona un tipo de organización');
    }
  };

  return (
    <div className='welcome_screen'>
      <h3>¿De qué tipo de organización eres miembro?</h3>
      <div className="botones-seleccion">
        <button
          className={tipoTemporal === 'Voluntariado' ? 'boton-seleccionado' : 'boton'}
          onClick={() => seleccionarTipo('Voluntariado')}
        >
          Voluntariado
        </button>
        <button
          className={tipoTemporal === 'Local' ? 'boton-seleccionado' : 'boton'}
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
