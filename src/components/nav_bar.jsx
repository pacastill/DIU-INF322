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
        to='/lightbulb'
      >
        Ampolleta
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/caratulas'
      >
        Caratulas
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/detalle'
      >
        Detalle
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/crear_peticion'
      >
        Crear Petición
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/actualizar_peticion'
      >
        Actualizar Petición
      </NavLink>
      
      
    </nav>
  )
}
 
export default NavBar
