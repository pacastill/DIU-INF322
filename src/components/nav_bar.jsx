import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useUser } from './UserContext';  // Importa el contexto
import '../stylesheets/index.scss';
import BotonIntercambio from '../components/botonIntercambio';
import BotonAyuda from './botonAyuda';

export const NavBar = () => {
  const { tipoSeleccionado } = useUser(); // Accede al tipo de usuario seleccionado
  const location = useLocation();

  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }

  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Inicio
      </NavLink>

      {/*<NavLink
        className={navLinkClass}
        to='/maps'
      >
        Mapa
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/caratulas'
      >
        Caratulas
      </NavLink>
      */}

      <NavLink
        className={navLinkClass}
        to='/maps'
      >
        Peticiones
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/mis-peticiones'
      >
        Mis Peticiones
      </NavLink>
      

      {/* Solo muestra el enlace "Crear Petición" si el tipo de usuario es "Local" */}
      {tipoSeleccionado === 'Local' && (
        <NavLink
          className={navLinkClass}
          to='/crear-peticion'
        >
          Crear Petición
        </NavLink>
      )}

      {(location.pathname === '/maps' || location.pathname === '/caratulas') && (
        <BotonIntercambio />
      )}

      {location.pathname === '/maps' && (
        <BotonAyuda />
      )}

    </nav>
  )
}
 
export default NavBar
