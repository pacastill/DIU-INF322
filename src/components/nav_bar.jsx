// Navbar.js
import React from 'react';
import '../stylesheets/index.scss';

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="navbar__logo" href="/">MiSitio </div>
      <div className="navbar__search">
        <input 
          type="text" 
          className="navbar__search-input" 
          placeholder="Buscar por dirección o por tipo de ayuda" 
        />
      </div>
    </nav>
  );
}

export default Navbar;
