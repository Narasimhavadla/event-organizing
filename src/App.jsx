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
import BookEvent from './pages/BookEvent'
import WeddingService from './pages/services/weddingService'
import CorporateEvents from './pages/services/CorporateEvents'
import LiveConcert from './pages/services/LiveConcert'
import LoginPage from './pages/login'
import AdminDashboard from './admin/dashboard'

// from this test case 

import Elegant from './components/themes/elegant'
import Vibrant from "./components/themes/vibrant"
import Corporate from './components/themes/corporate'
import Modern from './components/themes/modern'
import Luxury from './components/themes/luxuary'
import ArtisticContact from './components/themes/Artistic'
import FairytaleContact from './components/themes/Fairytale'

// 

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage /> } />
        <Route path="/about-us" element={<AboutUs /> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/book-event" element={<BookEvent /> } />
        <Route path="/wedding" element={<WeddingService /> } />
        <Route path="/corporate-events" element={<CorporateEvents /> } />
        <Route path="/live-concert" element={<LiveConcert /> } />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/admin-dashboard" element={<AdminDashboard /> } />


        {/* test */}
        <Route path="/elegant" element={<Elegant /> } />
        <Route path="/vibrant" element={<Vibrant /> } />
        <Route path="/corporate" element={<Corporate /> } />
        <Route path="/modern" element={<Modern /> } />
        <Route path="/luxuary" element={<Luxury /> } />
        <Route path="/artistic" element={<ArtisticContact /> } />
        <Route path="/fairy" element={<FairytaleContact /> } />

        {/* end */}
      </Routes>
      <Footer />

      
    </div>
  )
}

export default App
