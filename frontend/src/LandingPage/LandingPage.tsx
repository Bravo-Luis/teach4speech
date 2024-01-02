import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

import './LandingPage.css';

import Navbar from "./Components/Navbar/Navbar";
import JoinSection from "./Components/JoinSection/JoinSection";
import TextSection from "./Components/TextSection/TextSection";
import BubbleSection from "./Components/BubbleSection/BubbleSection";
import SocialSection from "./Components/SocialSection/SocialSection";
import Header from "./Components/Header/Header";

const AboutSectionContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
function LandingPage(){

    return (
        <section className="landing-page">
            <Navbar/>
            
            {/* <JoinSection/> */}
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