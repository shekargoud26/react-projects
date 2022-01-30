import React from 'react';

import logo from '../images/react-icon-small.png';

const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="react-logo" className="nav--logo" />
            <h2 className="nav--h2">ReactFacts</h2>
            <h3 className="nav--h3">React Course - Project 1</h3>
        </nav>
    );
};

export default NavBar;