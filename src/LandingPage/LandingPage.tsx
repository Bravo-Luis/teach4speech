
import './LandingPage.css';

import Navbar from "./Components/Navbar/Navbar";

import TextSection from "./Components/TextSection/TextSection";
import SocialSection from "./Components/SocialSection/SocialSection";
import Header from "./Components/Header/Header";

import React, { useEffect } from 'react';

function LandingPage(){
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            document.querySelector('.bg1').style.transform = `translateY(${scrollPosition * 0.04}px)`;
            document.querySelector('.bg2').style.transform = `translateY(${scrollPosition * 0.02}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="landing-page">
            <div className="background-layer bg1"></div>
            <div className="background-layer bg2"></div>
            <Navbar/>
           <div id="Home">
           <Header/>
           </div>
            <div id="About">
            <TextSection />
            </div>
            <div id="Contact">
            <SocialSection />
            </div>
        </section>
    )
}

export default LandingPage;