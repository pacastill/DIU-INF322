import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../stylesheets/index.scss';

const WelcomeScreen = () => {
  const navigate = useNavigate()

  const handleOrganizationSelect = (type) => {
    //Elección del tipo de organización
    console.log(`Selected organization type: ${type}`)
    //navigate('/home')
  }

  return (
    <div className='welcome_screen'>
      <h1 className="text-4xl items-center font-bold mb-8">¡Bienvenido a ColaBora!</h1>
      <p className="text-xl mb-8">¿De qué tipo de organización eres miembro?</p>
      <div className="flex mb-8">
        <button
          onClick={() => handleOrganizationSelect('/maps')} //Hay que crear estas rutas
          className='submit-button'
        >
          Voluntariado
        </button>
        <button
          onClick={() => navigate('/caratulas')}//Esta está funcional pero en verdad no se va a ocupar este como tal jaja
          className= 'submit-button'
        >
          Local
        </button>
      </div>
      <button
        onClick={() => navigate('/home')}//Este ya no sirve es el que estaba de ejemplo
        className='submit-button'
      >
        Ingresar
      </button>
    </div>
  )
}

export default WelcomeScreen