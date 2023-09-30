import React from "react"
import {FaHome, FaPhone, FaMailBulk, FaLinkedin,FaFacebook, FaGithubSquare, FaInstagram} from "react-icons/fa"
import {RiTwitterXFill} from "react-icons/ri"
export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size = {20} style = {{color:"#fff",marginRight:"2rem"}}/>
                        <div>
                            <p>241, Shastri Nagar, Dadabari,</p>
                            <p>Kota, Rajasthan, India </p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size = {20} style = {{color:"#fff",marginRight:"2rem"}}/>
                        <a href = "">+91-8005-62155</a>
                        </h4>                        
                        
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size = {20} style = {{color:"#fff",marginRight:"2rem"}}/>
                        <a href = "">ch20b024@iittp.ac.in</a>
                        </h4>                        
                        
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>
                        This is me Swapnil Sharma, B.tech(Final Year) Student in Indian Institute of Tehnology, Tirupati.
                        I am keenly interested in the field of Web Development, Data Science, Machine Learning, Deep Learning and 
                        Artificial Intelligence.
                    </p>
                    <div className="social">
                    <a href = ""><FaFacebook className = "logo" size = {20}/></a>
                    <a href = ""><RiTwitterXFill className = "logo" size = {20}/></a>
                    <a href = ""><FaLinkedin className = "logo" size = {20}/></a>
                    <a href = ""><FaGithubSquare className = "logo" size = {20}/></a>
                    <a href = ""><FaInstagram className = "logo" size = {20}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}