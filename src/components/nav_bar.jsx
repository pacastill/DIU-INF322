import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useUser } from './UserContext';  // Importa el contexto
import '../stylesheets/index.scss';
import BotonIntercambio from '../components/botonIntercambio';
import BotonFiltro from './botonFiltro';
import BotonAyuda from './botonAyuda';

export const NavBar = () => {
  const { tipoSeleccionado } = useUser(); // Accede al tipo de usuario seleccionado
  const location = useLocation();

  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className='nav-bar'>
      {/* Siempre muestra "Inicio" */}
      <NavLink className={navLinkClass} to='/'>
        Inicio
      </NavLink>

      {/* Muestra "Peticiones" y "Mis Peticiones" solo si se ha seleccionado un tipo */}
      {tipoSeleccionado && (
        <>
          <NavLink className={navLinkClass} to='/maps'>
            Peticiones
          </NavLink>

          {/*<NavLink className={navLinkClass} to='/mis-caratulas'>
            Mis Peticiones
          </NavLink>*/}

          {/* Solo muestra el enlace "Crear Petición" si el tipo de usuario es "Local" */}
          {tipoSeleccionado === 'Local' && (
            <NavLink className={navLinkClass} to='/crear-peticion'>
              Crear Petición
            </NavLink>
          )}
        </>
      )}

      {/* Mostrar botones condicionalmente en base a la ruta */}
      {(location.pathname === '/maps' || location.pathname === '/caratulas') && <BotonIntercambio />}
      

      {tipoSeleccionado === 'Local' && (location.pathname === '/caratulas' || location.pathname ==='/mis-caratulas') && <BotonFiltro />}
      {/*{location.pathname === '/maps' && <BotonAyuda />}*/}

    </nav>
  );
};

export default NavBar;
