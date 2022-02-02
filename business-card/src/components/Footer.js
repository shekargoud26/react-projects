import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='footer'>
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
            <FontAwesomeIcon icon={faGithub} className="footer-icon"/>
            <FontAwesomeIcon icon={faTwitter} className="footer-icon"/>
            <FontAwesomeIcon icon={faInstagram} className="footer-icon"/>
            <FontAwesomeIcon icon={faFacebook} className="footer-icon"/>

        </div>
    );
}

export default Footer;