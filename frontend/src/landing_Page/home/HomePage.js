import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Stats from './Stats';
import Education from './Education';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import Openaccount from './Openaccount';
import navbar from './navbar';
import footer from './Footer';


function HomePage() {
    return (
       <>
            <navbar/>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <Openaccount />
            <footer />
         </>
    );
}

export default HomePage;
