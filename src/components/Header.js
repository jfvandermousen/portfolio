import React, {  useEffect,} from "react";
// import { withRouter, Link, useHistory } from "react-router-dom";
import gsap from "gsap"
// import Menu from './Menu';
import logo from '../img/logo.png';


export default function Header() {
        
        useEffect(()=>{
            // let y = window.screen.width;
            // var negY = ( -y ); // => -100
            gsap.to('.logo', {x:-250, duration: 1})
            // console.log(y)
        },[])

    return (
        <div className="flex flex-row justify-end items-center mb-8 py-2" >
            <div className="logo">
                <img src={logo} alt="logo_jf_vandermousen"/>
            </div>

        </div>
    )
}
