import React from 'react'
import About from "./About";

import Works from "./Works";
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';


export default function Home() {
    return (
        <div>
            <About />
            <Fade bottom delay={11000}>
            <Works className="mt-8" /> 
            </Fade>
            <Footer />
        </div>
    )
}
