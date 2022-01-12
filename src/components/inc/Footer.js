import React from 'react';
import { Link } from 'react-router-dom';
import SocialFollow from './SocialFollow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div>
            
            <section className="section footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                        
                        <div className="row">
                            <div className="col-md-12">
                                <SocialFollow />
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-md-4">
                            <h6>Principales Actividades</h6>
                            <hr/>
                            <p className="text-white">Soluciones IoT de Eficiencia Energética</p>
                            <p className="text-white">Auditorias de Aire</p>
                            <p className="text-white">Configuración de Sistemas de Aire Comprimido</p>    
                        </div>

                        <div className="col-md-4">
                            <h6>Rutas Rápidas</h6>
                            <hr/>
                            <div><Link to="/">Inicio</Link></div>
                            <div><Link to="/audit">Auditorias de Aire</Link></div>
                            <div><Link to="/calidad">Calidad de Aire</Link></div>
                            <div><Link to="/elegir">Elegir Compresor</Link></div>
                            <div><Link to="/contacto">Contacto</Link></div>
                        </div>

                        <div className="col-md-4">
                            <h6>Información de Contacto</h6>
                            <hr/>
                            <div><p className="text-white mb-1">Avenida de Madrid, 25</p></div>
                            <div><p className="text-white mb-1">28500 Madrid</p></div>
                            <div><p className="text-white mb-1">España</p></div>
                            <div>
                                <p className="text-white mb-1">
                                    Telf: 
                                    <a href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" className="text-white mb-1" target="_blank"> +34 648 808 368</a>
                                    <a href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" className="whatsapp social" target="_blank">
                                        <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="text-white mb-1">
                                    email: 
                                    <a href="#bottom" className="text-white mb-1"> info@ACE-Aire.com</a>
                                </p>
                            </div>
                        </div>
                        </div>
                        
                        <hr />

                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-white text-center">
                                    Designed by:  
                                    <a href="http://www.appsleanit.com/" className="web social" target="_blank">AppsLeanIT</a>
                                    in 2022
                                </p>                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}
