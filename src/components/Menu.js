import React, {useState} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom"; 


export default function Menu() {
    const [showMenu,setShowMenu] = useState(false);

    let menu

    if(showMenu){
        menu =  
        <Fade delay={1000} >
        <div onClick={()=>setShowMenu(!showMenu)} className="fixed bg-black h-full w-full top-0 left-0 z-50 flex flex-col justify-center items-center" >
            <Link to="/"><div className="py-4" onClick={()=>setShowMenu(!showMenu)}> <b className="text-4xl">Home</b></div></Link>
            <Link to="/projects" ><div className="py-4" onClick={()=>setShowMenu(!showMenu)}><b className="text-4xl ">Projects</b></div></Link>
            <Link to="/contact" ><div className="py-4" onClick={()=>setShowMenu(!showMenu)}><b className="text-4xl ">Contact</b></div></Link>

        </div>
        </Fade>

    }

    return (
        <div>
        <div className="navBar flex flex-row justify-end" >
            <Hamburger  duration={1} onToggle={()=>setShowMenu(!showMenu)} />
        </div>
        {menu}
        </div>

    )
}

