import  React, { useState } from "react"
import IntroImg from "../assets/img1.jpg"
import {motion} from "framer-motion"
export default function Hero(){
    const [u,setu] = useState(false)
    return(
        <div className="hero" onMouseEnter={()=>setu(!u)} >
            <div className = "mask">
                <img className = "into-img" src = {IntroImg} alt = "image"/>
            </div>
            <div className="content">
                <motion.p animate={{scale:u ?[0,1]: 1}} transition = {{duration:0.7}}>HI, I'M SWAPNIL SHARMA</motion.p>
                <motion.h1 animate={{scale:u ? [0,1]:1}} transition = {{duration:0.7}}> AN ENTHUSIASTIC PROGRAMMER</motion.h1>
                <motion.div animate={{scale:u ?[0,1]: 1}} transition = {{duration:0.7}} >
                    <a href = "" className = "btn">RESUME</a>
                    <a href = "" className = "btn btn-light">GITHUB</a>
                </motion.div>
            </div>
        </div>
    )
}