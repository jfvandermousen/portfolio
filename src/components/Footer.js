import React from 'react'
import logo from '../logo.png';


export default function Footer() {
    return (
        <div className="footer py-10  mt-10">
            <div className="footer-wrap container mx-auto px-8">
                <div className="flex flex-row items-center">
                    <div className="logo-footer mr-2">
                    <img src={logo} alt="logo_jf_vandermousen"/>
                    </div>
                    <div className="social-medias">
                        <ul>
                            <li><b><a href="https://www.linkedin.com/in/jean-francois-vandermousen/" target="_blank" rel="noreferrer">LinkedIn</a></b></li>
                            <li><b><a href="https://github.com/jfvandermousen" target="_blank" rel="noreferrer">Github</a></b></li>       
                    </ul>
                    </div>
                    </div>
                    <div><p className="">@2021 Jf Vandermousen</p></div>
            </div>
        </div>
    )
}

