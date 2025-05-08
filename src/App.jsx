import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Index'
import Packages from './pages/Packages/Index'
import Portfolio from './pages/Portfolio/Index'
import OurProcess from './pages/OurProcess/Index'
import Contact from './pages/Contact/Index'
import NotFound from './pages/NotFound/Index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/our-process" element={<OurProcess />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
