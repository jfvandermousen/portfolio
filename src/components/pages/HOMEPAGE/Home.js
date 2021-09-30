import React from 'react'
import About from "./About";
import "./style.css";
import Fade from 'react-reveal/Fade';
import Footer from '../../Footer';
import Gallery from './Gallery';

export default function Home() {
    return (
        <div>
            <About />
            <Fade bottom delay={11000}>
                <Gallery  />
            </Fade>
            
            <Footer />
        </div>
    )
}
