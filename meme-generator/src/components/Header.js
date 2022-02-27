import React from 'react';

import trollFace from "../images/troll-face.png";

const Header = () => {
    return (
        <nav className='header'>
                <img src={trollFace} alt='troll'className='header--image'/>
                <h1 className='header--title '>Meme Generator</h1>
            <h3 className='header--project'>React Course - Project 3</h3>
        </nav>
    );
};

export default Header;