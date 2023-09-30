import React from "react"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Heroimg2.js";
import Forms from "../Components/form.js"
function Contact() {
    return (
      <div >
        <Navbar/>
        <Hero2 heading ="Contact" text = "Let's have a chat."/>
        <Forms/>
        <Footer/>
      </div>
    );
  }
  
  export default Contact;