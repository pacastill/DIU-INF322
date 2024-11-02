import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LightbulbPage from '../pages/lightbulb_page'
import NavBar from '../components/nav_bar'
import WelcomeScreen from '../pages/welcome_screen'
import CaratulasPage from '../pages/caratulas_page'

import Detalle from '../components/detalle'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen items-center bg-gray-100">
        <NavBar />
        <div className="container items-center mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />

            <Route path="/lightbulb" element={<LightbulbPage />} />

            <Route path="/caratulas" element={<CaratulasPage />} />

            <Route path="/detalle" element={<Detalle />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout