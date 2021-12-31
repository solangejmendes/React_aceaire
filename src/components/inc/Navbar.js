import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white shadow">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">ACE - Aire Comprimido Eficiente</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Inicio</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link to="/auditorias" className="nav-link active">Auditorias de Aire</Link>
                            </li>      
                            <li className="nav-item">
                                <Link to="/calidad" className="nav-link active">Calidad de Aire</Link>
                            </li>  
                            <li className="nav-item">
                                <Link to="/elegir" className="nav-link active">Elegir Compressor</Link>
                            </li>                                   
                            <li className="nav-item">
                                <Link to="/contacto" className="nav-link active">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
