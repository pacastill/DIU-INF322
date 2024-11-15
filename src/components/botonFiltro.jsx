import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../stylesheets/index.scss';

const BotonFiltro = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isToggled, setIsToggled] = useState(location.pathname === '/caratulas'|| location.pathname === '/mis-caratulas');

    // Maneja el clic del botón
    const handleClick = () => {
        if (isToggled) {
            navigate('/mis-caratulas'); // "filtra" a mis caratulas
        } else {
            navigate('/caratulas'); // Redirige a caratulas
        }
        setIsToggled(!isToggled); // Cambia el estado del botón
    };

    return (
        <div className="floating-button-filter">
            <button
                className={isToggled ? 'boton-seleccionado-filter' : 'boton-filter'}
                onClick={handleClick}
            >
                {isToggled ? 'Ver Mis Carátulas' : 'Ver Carátulas'}
            </button>
        </div>
    );
};

export default BotonFiltro;
