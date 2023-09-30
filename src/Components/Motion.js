import React, { useState } from "react"
import {delay, motion} from "framer-motion"
export default function Motion(){
    const [rotate,setrotate] = useState(false)
    
    return( <div className = "example--container" onMouseEnter={()=>setrotate(!rotate)}>
        <div className ="example-container" >
            <motion.div animate = {{rotate: rotate? [360,0,0,360]:0, x: rotate? [0,500,-500,0]: 0}} transition={{repeat:rotate? Infinity:0, duration:rotate ? 5:0}}>            
            <h3 className="ankit">Welcome to my Portfolio site.</h3>
            <p style = {{color:"black", marginTop:"5px",textAlign:"center",marginLeft:"2px",marginRight:"2px"}}>My name is Swapnil Sharma and I heartly welcome you.</p>
            </motion.div>
        </div>
    </div>)
}