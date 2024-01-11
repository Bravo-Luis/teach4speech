
import './LandingPage.css';

import Navbar from "./Components/Navbar/Navbar";

import TextSection from "./Components/TextSection/TextSection";
import SocialSection from "./Components/SocialSection/SocialSection";
import Header from "./Components/Header/Header";

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