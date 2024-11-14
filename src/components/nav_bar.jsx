import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from './UserContext';  // Importa el contexto
import '../stylesheets/index.scss';

export const NavBar = () => {
  const { tipoSeleccionado } = useUser(); // Accede al tipo de usuario seleccionado

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

      <NavLink
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
      <NavLink
        className={navLinkClass}
        to='/mis-caratulas'
      >
        Mis caratulas
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

    </nav>
  )
}
 
export default NavBar
