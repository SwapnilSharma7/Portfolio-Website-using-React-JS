import React from "react"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Heroimg2.js";
import AboutContent from "../Components/AboutContent";
function About() {
    return (
      <div>
        <Navbar/>
        <Hero2 heading ="About" text = "Want to walk with technology hand in hand"/>
        <AboutContent/>
        <Footer/>
      </div>
    );
  }
  
  export default About;