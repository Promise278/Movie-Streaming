import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './components/Home'
import Video from './pages/Video'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tvshow from './pages/Tvshow';
import Showtv from './pages/Showtv';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/tvshow" element={<Tvshow />} />
        <Route path="/show/:id" element={<Showtv />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
