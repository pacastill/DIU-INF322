import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
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
      <NavLink
        className={navLinkClass}
        to='/crear-peticion'
      >
        Crear Petición
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/actualizar-peticion'
      >
        Actualizar Petición
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/maps'
      >
        maps
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/enviar-ayuda'
      >
        Enviar ayuda
      </NavLink>
      
    </nav>
  )
}
 
export default NavBar
