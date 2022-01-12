import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/rotor.png';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white shadow">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img className="rotor" src={ logo } alt="logo" width="10%" />
                        ACE - Aire Comprimido Eficiente  
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active">Inicio</NavLink>
                            </li>                            
                            <li className="nav-item">
                                <NavLink to="/auditorias" className="nav-link active">Auditorias de Aire</NavLink>
                            </li>      
                            <li className="nav-item">
                                <NavLink to="/calidad" className="nav-link active">Calidad de Aire</NavLink>
                            </li>  
                            <li className="nav-item">
                                <NavLink to="/elegir" className="nav-link active">Elegir Compressor</NavLink>
                            </li>                                   
                            <li className="nav-item">
                                <NavLink to="/contacto" className="nav-link active">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
