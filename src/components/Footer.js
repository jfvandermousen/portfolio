import React from 'react'
import logo from '../logo.png';


export default function Footer() {
    return (
        <div className="footer p-12 mt-20">
            <div className="logo-footer">
               <img src={logo} alt="logo_jf_vandermousen"/>
            </div>
            <div className="social-medias">
                <ul>
                    <li><b><a href="https://www.linkedin.com/in/jean-francois-vandermousen/" target="_blank">LinkedIn</a></b></li>
                    <li><b><a href="https://github.com/jfvandermousen" target="_blank">Github</a></b></li>       
            </ul>
            </div>
            <p className="mt-4">@2021 Jf Vandermousen</p>
        </div>
    )
}

