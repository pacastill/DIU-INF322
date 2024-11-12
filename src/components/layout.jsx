import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DatosPruebaProvider } from './datosPrueba.jsx';
import NavBar from '../components/nav_bar'
import WelcomeScreen from '../pages/welcome_screen'
import CaratulasPage from '../pages/caratulas_page'
import MisCaratulasPage from '../pages/mis_caratulas_page'
import CrearPeticion from '../pages/crear_peticion2'
import ActualizarPeticion from '../pages/actualizar_peticion'
import EstDetalle from '../pages/detalle_estatico.jsx'
import Detalle from '../pages/detalle.jsx'
import MapPage from '../pages/maps.jsx';
import EnviarAyuda from '../pages/enviar_ayuda.jsx';

const Layout = () => {
  return (
    <DatosPruebaProvider>
    <BrowserRouter>
      <div className="min-h-screen items-center bg-gray-100">
        <NavBar />
        <div className="container items-center mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />

            <Route path="/caratulas" element={<CaratulasPage />} />

            <Route path="/mis-caratulas" element={<MisCaratulasPage />} />

            <Route path="/detalle" element={<EstDetalle />} />

            <Route path="/detalle/:id" element={<Detalle />} />

            <Route path="/crear-peticion" element={<CrearPeticion />} />

            <Route path="/actualizar-peticion" element={<ActualizarPeticion />} />

            <Route path="/actualizar-peticion/:id" element={<ActualizarPeticion />} />

            <Route path="/enviar-ayuda" element={<EnviarAyuda />} />
            
            <Route path="/maps" element={<MapPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </DatosPruebaProvider>
  )
}

export default Layout