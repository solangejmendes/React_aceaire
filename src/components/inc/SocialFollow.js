import React from "react";
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
                <a href="#bottom" className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/ACE-Aire-Comprimido-Eficiente-103723305063187" target="_blank" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#bottom" className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#bottom" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.linkedin.com/company/aceaire" target="_blank" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" target="_blank" className="whatsapp social">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="#bottom" className="skype social">
                    <FontAwesomeIcon icon={faSkype} size="2x" />
                </a>
            </div>
        </div>
    </div>
  );
}
