import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-left">
                                    
                                    <div>
                                        <h6>Contact Form</h6>
                                    </div>
                                    
                                    <hr />
                                    
                                    <div data-form-alert="true"></div>

                                    <form action="https://formsubmit.co/info@ACE-Aire.com" method="POST" data-form-title="CONTACT FORM">
                                        <div className="form-group">
                                            <label className="mb-1">Full Name</label>
                                            <input type="text" className="form-control" name="name" required="" placeholder="Nombre*" data-form-field="Name" />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Phone Number</label>
                                            <input type="tel" class="form-control phone" name="phone" placeholder="Telefono" data-form-field="Phone" />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Email Adress</label>
                                            <input type="email" class="form-control email" name="email" required="" placeholder="Email*" data-form-field="Email" />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Message</label>
                                            <textarea class="form-control message" name="message" placeholder="Type your message..." rows="7" data-form-field="Message"></textarea>
                                        </div>
                                        <div className="form-group py-3">
                                            <button type ="submit" className="btn btn-primary shadow w-100">
                                                Send Message
                                                <Link to="/gracias"></Link>
                                            </button>
                                        </div>
                                    </form>
                                
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5>Address Information</h5>
                                    <div className="underline"></div>
                                    <div><p>Avenida de Madrid, 25</p></div>
                                    <div><p>28500 Madrid</p></div>
                                    <div><p>España</p></div>
                                    <div>
                                        <p>
                                            Telf: 
                                            <Link to="https://api.whatsapp.com/send?phone=648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?"> +34 648 808 368</Link>
                                            <Link to="https://api.whatsapp.com/send?phone=648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" className="whatsapp social">
                                                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                                            </Link>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            email: 
                                            <Link to="#"> info@ACE-Aire.com</Link>
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
