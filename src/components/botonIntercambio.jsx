import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './botonIntercambio.scss';

const BotonIntercambio = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Determina la página actual y el destino al que debe redirigir
    const isMapPage = location.pathname === '/maps';
    const targetPage = isMapPage ? '/caratulas' : '/maps';

    const handleClick = () => {
        navigate(targetPage); // Redirige a la página opuesta
    };

    const handleNavigate = (page) => {
        navigate(page);
    };

    return (
        <div className="floating-button">
        <div className= "toggle-button"> 
        <div className="botones-seleccion">
            <button
                className={isMapPage ? 'boton-seleccionado' : 'boton'}
                onClick={() => handleNavigate('/maps')}
            >
                Mapas
            </button>
            <button
                className={!isMapPage ? 'boton-seleccionado' : 'boton'}
                onClick={() => handleNavigate('/caratulas')}
            >
                Carátulas
            </button>
        </div>
        </div>
        </div>
    );
};

export default BotonIntercambio;
