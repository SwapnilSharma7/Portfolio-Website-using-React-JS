import React from "react"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Heroimg2.js";
import Work from "../Components/work.js";
function Project() {
    return (
      <div>
        <Navbar/>
        <Hero2 heading = "PROJECTS" text = "Some of my recent works."/>
        <Work/>
        <Footer/>
      </div>
    );
  }
  
  export default Project;