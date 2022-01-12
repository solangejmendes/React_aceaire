import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faSkype
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  return (
    <div>
        <div className="section bg-dark">
            <div className="social-container">
                <p className="text-white">Siganos en las redes sociales:  </p>
                <a
                    className="linkedin social"
                    href="https://www.linkedin.com/company/aceaire"
                    target="_blank"
                    >
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
                <a 
                    className="youtube social"
                    href="#bottom"
                >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a 
                    className="facebook social"
                    href="https://www.facebook.com/ACE-Aire-Comprimido-Eficiente-103723305063187"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                    className="instagram social"
                    href="#bottom"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a 
                    className="twitter social"
                    href="#bottom"
                >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a 
                    className="whatsapp social"
                    href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a 
                    className="skype social"
                    href="#bottom"
                >
                    <FontAwesomeIcon icon={faSkype} size="2x" />
                </a>
            </div>
        </div>
    </div>
  );
}
