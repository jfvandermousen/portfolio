import React, {  useEffect,} from "react";
// import { withRouter, Link, useHistory } from "react-router-dom";
import gsap from "gsap"
// import Menu from './Menu';
import logo from '../logo.png';
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
        <div className="flex flex-row justify-between items-center py-2 mb-8" >
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo_jf_vandermousen"/></Link>
            </div>
            <Menu />
            {/* <ul className="main-nav flex flex-row">
                <Link to="/"><li className="px-4"> <b className="ar text-xl">Home</b></li></Link>
                <Link to="/projects" ><li className="px-4"><b className=" ar text-xl ">Projects</b></li></Link>
                <Link to="/contact" ><li className="px-4"><b className="ar text-xl ">Contact</b></li></Link>
            </ul> */}
                        <ul className="main-nav flex flex-row">
                                <Link to="/"><li><b className="text-xl" href="#">Home</b></li></Link> 
                                <Link to="/projects" ><li><b  className="text-xl" href="#">Projects</b></li></Link> 
                                <Link to="/contact" ><li><b  className="text-xl"href="#">Contact</b></li></Link> 
                        </ul>

        </div>
    )
}
