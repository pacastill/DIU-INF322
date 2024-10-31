import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomeScreen = () => {
  const navigate = useNavigate()

  const handleOrganizationSelect = (type) => {
    //Elección del tipo de organización
    console.log(`Selected organization type: ${type}`)
    // For now, we'll just navigate to the home page
    //navigate('/home')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-4xl font-bold mb-8">¡Bienvenido a ColaBora!</h1>
      <p className="text-xl mb-8">¿De qué tipo de organización eres miembro?</p>
      <div className="flex mb-8">
        <button
          onClick={() => handleOrganizationSelect('./pages/voluntariado')} //Hay que crear estas rutas
          className="px-6 py-2 bg-white text-black rounded-l-full border border-gray-300 hover:bg-gray-100"
        >
          Voluntariado
        </button>
        <button
          onClick={() => handleOrganizationSelect('./pages/local')}//Esta igual
          className="px-6 py-2 bg-white text-black rounded-r-full border border-gray-300 hover:bg-gray-100"
        >
          Local
        </button>
      </div>
      <button
        onClick={() => navigate('/home')}//Este ya no sirve es el que estaba de ejemplo
        className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        Ingresar
      </button>
    </div>
  )
}

export default WelcomeScreen