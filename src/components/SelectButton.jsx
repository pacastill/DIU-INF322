import React from 'react'
import '../stylesheets/button/SelectButton.scss' //Hay que ver los estilos de boton jj

const SelectButton = ({ label, onClick, selected }) => {
    return (
      <button
        className={`select-button ${selected ? 'selected' : ''}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };

  export default SelectButton;

