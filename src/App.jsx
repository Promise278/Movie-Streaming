import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './components/Home'
import Video from './pages/Video'
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
