import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Home from './components/pages/Home';
import Audit from './components/pages/Audit';
import Calidad from './components/pages/Calidad';
import Elegir from './components/pages/Elegir';
import Contact from './components/pages/Contact';
import Gracias from './components/pages/inc/Gracias';

function App() {
  return (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="auditorias" element={<Audit />} />
                <Route path="calidad" element={<Calidad />} />
                <Route path="elegir" element={<Elegir />} />
                <Route path="contacto" element={<Contact />} />
                <Route path="gracias" element={<Gracias />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
