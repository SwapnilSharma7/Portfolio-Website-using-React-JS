import React from "react"
import { Link } from "react-router-dom"
import Img1 from "../assets/img_abou1.jpg"
import Img2 from "../assets/img_about2.jpg"
import {motion} from "framer-motion"
import { useState } from "react"
export default function AboutContent(){
    const [u,setu] = useState(false)
    return (
        <div className="about" onMouseEnter={()=>setu(!u)}>
            <motion.div animate={{scale:u ?[0,1]: 1}} transition = {{duration:0.7}}>
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>Welcome to my portfolio website! I'm passionate about data science, machine learning, deep learning, and web development. Through my work, I strive to leverage cutting-edge technology to solve real-world problems and create innovative solutions. Explore my projects to see how I blend creativity and technology to make a meaningful impact.</p>
                    <Link to ="/contact"><button className = "btn">Contact</button></Link>
                </div>
            </motion.div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src = {Img1} alt = "image" className="img"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src = {Img2} alt = "image" className="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}