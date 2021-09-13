
import React, {useEffect, useRef} from "react"
import { textIntro } from "./Animate"
import { init } from "ityped";

export default function About() {
    let intro = useRef(null)

    useEffect(() => {
            
        //animate text
            textIntro(intro)
        }, [])

    useEffect(()=>{
            const myElement = document.querySelector("#about");
            init(myElement, {
                    showCursor: false,
                    startDelay: 3200,
                    disableBackTyping: true,
                    strings: ["I naturally oriented myself towards Front-end development by following a course @ Becode Brussels."]
                });

            });


    return (
        <div className="about-block">
        <section className="mb-8"> 
            <div className="mb-2"><h3 className="text-xl mb-4 lg:text-2xl">$whoami</h3></div>
            <div className="intro " ref={(el) => (intro = el)}>
                <h1 className="text-2xl">Jf Vandermousen</h1>
                <h2>Creative frontend developer</h2>
            </div>
        </section>
        <section className="about mb-4">
        <div className="mb-2"><h3 className="text-xl mb-4 lg:text-2xl">about</h3></div>
        <p id="about" className="text-xl lg: text-2xl"></p>
    </section>

    </div>
    )

};