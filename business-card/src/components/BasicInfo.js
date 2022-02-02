import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import profilePic from '../images/profile-picture.jpg'

const BasicInfo = () => {
    return (
        <div className='basic-info'>
            <img src={profilePic} alt='shekar arukala' className='basic-info--pic' />
            <h2 className='basic-info--name'> Shekar Arukala </h2>
            <h3 className='basic-info--role'> Full-stack developer </h3>
            <h4 className='basic-info--site'> shekar.arukala </h4>
            <button className='basic-info--linkedin'>  <FontAwesomeIcon icon={faLinkedin} className="ln-icon"/> <p>Linkedin</p>  </button>
        </div>
    );
}

export default BasicInfo;