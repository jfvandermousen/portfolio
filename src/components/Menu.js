import React, {useState} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom"; 


export default function Menu() {
    const [showMenu,setShowMenu] = useState(false);
    // const [isOpen, setOpen] = useState(false)
    let menu
    

    if(showMenu){
        menu =  
        <Fade delay={1000} >
        <div  onClick={()=>setShowMenu(!showMenu)}className="fixed bg-black h-full w-full top-0 left-0 z-50 flex flex-col justify-center items-center" >
         <Link to="/"><div className="p-4" onClick={()=>setShowMenu(!showMenu)}> <p className="nav-overlay text-4xl">Home</p></div></Link>
            <Link to="/projects" ><div className="p-4" onClick={()=>setShowMenu(!showMenu)}><p className="nav-overlay text-4xl ">Projects</p></div></Link>
            <Link to="/contact" ><div className="p-4" onClick={()=>setShowMenu(!showMenu)}><p className=" nav-overlay text-4xl ">Contact</p></div></Link>
        </div>
        </Fade>

    }

    return (
        <div className="above">
        <div className=" navBar flex flex-row justify-end" >
            <Hamburger  duration={1}  onToggle={()=>setShowMenu(!showMenu) }  />
        </div>
        {menu}
        </div>

    )
}

