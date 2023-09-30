import React from "react"
import Navbar from "../Components/Navbar.js"
import Hero from "../Components/Heroimg.js"
import Footer from "../Components/Footer.js"
import Motion from "../Components/Motion.js"
export default function Home(){
    return (
        <div className="home">
            <Navbar/>
            <Hero/>
            <Motion/>
            <Footer/>
        </div>
    )
}