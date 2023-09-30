import React, {useState} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
export default function Navbar(){
    // using the useState hook
    const [u,setu] = useState(false)
    const [click,setClick] = useState(false);
    const handleClick =()=>{
        setClick(!click);
    }
    const [color,setColor] = useState(false); // to change the color of the header once we scroll downwards.
    const changeColor = ()=>{
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);
    return (
        <div className={color ? ("header"): ("header header-bg")} onMouseEnter={()=>setu(!u)}>
            <motion.h1 animate={{scale:u ?[0,1]: 1}} transition = {{duration:0.7}}><Link to="/">Portfolio</Link></motion.h1>
            <ul className={click ? ("nav-menu active") :("nav-menu") }>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/project">Projects</Link></li>
                <li><Link to = "/contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick = {handleClick}>
                {/* means if we clicked using ternary operator */}
                {click ? (<FaTimes size = {20} style = {{color:"#fff"}} />) : (<FaBars size = {20} style = {{color:"#fff"}} />)}
            </div>
        </div>
    )
}