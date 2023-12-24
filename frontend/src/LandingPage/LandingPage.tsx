import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

import './LandingPage.css';

import Navbar from "./Components/Navbar/Navbar";
import JoinSection from "./Components/JoinSection/JoinSection";

function LandingPage(){
    return (
        <section className="landing-page">
            <Navbar/>
            <JoinSection/>
        </section>
    )
}

export default LandingPage;