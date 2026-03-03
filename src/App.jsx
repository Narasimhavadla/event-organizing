import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import Footer from './components/footer'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage /> } />
        <Route path="/about-us" element={<AboutUs /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
      <Footer />

      
    </div>
  )
}

export default App
