import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

import './LandingPage.css';

import Navbar from "./Components/Navbar/Navbar";
import JoinSection from "./Components/JoinSection/JoinSection";
import TextSection from "./Components/TextSection/TextSection";
import BubbleSection from "./Components/BubbleSection/BubbleSection";
import SocialSection from "./Components/SocialSection/SocialSection";

const AboutSectionContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
function LandingPage(){

    return (
        <section className="landing-page">
            <Navbar/>
            <JoinSection/>
            <div id="About">
            <TextSection title="About" text={AboutSectionContent}/>
            </div>
            <div id="Services">
            <BubbleSection text1="Lorem" text2="Impsum" text3="Et" img1="https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-pen-smiling-white_140725-18658.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" img2="https://thebellarion.com/wp-content/uploads/2023/02/clipart-video-game.png" img3="https://img.freepik.com/free-vector/realistic-illustration-gold-cup-with-red-ribbon-winner-leader-champion_1262-13474.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703808000&semt=ais" title="Services"/>
            </div>
            <div id="Contact">
            <SocialSection />
            </div>
        </section>
    )
}

export default LandingPage;