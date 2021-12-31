import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faSkype,
  faEnvelope
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default function SocialFlow() {
  return (
    <div>
        <div className="section bg-dark">
            <p className="social-container">
                <p className="text-white">Siganos en las redes sociales:  </p>
                <Link to="#" className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </Link>
                <Link to="https://www.facebook.com/ACE-Aire-Comprimido-Eficiente-103723305063187" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </Link>
                <Link to="#" className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Link>
                <Link to="#" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Link>
                <Link to="https://www.linkedin.com/company/aceaire" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </Link>
                <Link to="https://api.whatsapp.com/send?phone=648808368&text=Gracias%20por%20contactar%20a%20ACE%20-%20Aire%20Comprimido%20Eficiente.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" className="whatsapp social">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </Link>
                <Link to="#" className="skype social">
                    <FontAwesomeIcon icon={faSkype} size="2x" />
                </Link>
            </p>
        </div>
    </div>
  );
}
