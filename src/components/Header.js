import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import gsap from "gsap"
import Menu from './Menu';
import logo from '../img/logo.png';


export default function Header() {
    const history = useHistory()


    //State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

// State of our button
const [disabled, setDisabled] = useState(false);

//toggle menu
const toggleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };
  // check if out button is disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // translate logo
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
