import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Form from '../inc/Form';


export default function Contact() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-left">
                                    <h5>Formulario de Contacto</h5>
                                    <div className="underline"></div>
                                    <hr />
                                    <div data-form-alert="true"></div>
                                    <Form />
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5>Address Information</h5>
                                    <div className="underline"></div>
                                    <div>
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.709757561456!2d-3.46139648477148!3d40.3044029703875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd423f0212ed9353%3A0xe03c00de07c964ec!2sAv.%20de%20Madrid%2C%2025%2C%2028500%20Arganda%20del%20Rey%2C%20Madrid!5e0!3m2!1ses!2ses!4v1641022617083!5m2!1ses!2ses" 
                                            width="600" 
                                            height="450" 
                                            style={{ border: 0 }}
                                            allowFullScreen="" 
                                            loading="lazy">
                                        </iframe>
                                    </div>
                                    <hr />
                                    <div>
                                        <p className="text-center">
                                            Telf: 
                                            <a href="https://api.whatsapp.com/send?phone=648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" target="_blank"> +34 648 808 368</a>
                                            <a href="https://api.whatsapp.com/send?phone=648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" target="_blank" className="whatsapp social">
                                                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                                            </a>
                                            | email: 
                                            <a href="#"> info@ACE-Aire.com</a>
                                        </p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
