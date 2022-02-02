import React from 'react';

import './style.css'
import BasicInfo from './components/BasicInfo';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='app'>
            <BasicInfo />
            <About/>
            <Footer/>
        </div>
    );
}


export default App;