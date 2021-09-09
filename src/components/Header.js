import React, {  useEffect,} from "react";
// import { withRouter, Link, useHistory } from "react-router-dom";
import gsap from "gsap"
// import Menu from './Menu';
import logo from '../img/logo.png';
import Menu from "./Menu";
import {Link} from "react-router-dom"; 


export default function Header() {
        
        useEffect(()=>{
            let y = window.innerWidth;
             //let negY = ( -y  ); // => -100
            gsap.from('.logo', {x:y, duration: 1})
             //console.log(negY)
        },[])

    return (
        <div className="flex flex-row justify-between items-center py-2" >
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo_jf_vandermousen"/></Link>
            </div>
            <Menu />
            <div className="main-nav flex flex-row">
                <Link to="/"><div className="px-4"> <b className="text-xl">Home</b></div></Link>
                <Link to="/projects" ><div className="px-4"><b className="text-xl ">Projects</b></div></Link>
                <Link to="/contact" ><div className="px-4"><b className="text-xl ">Contact</b></div></Link>
            </div>

        </div>
    )
}
