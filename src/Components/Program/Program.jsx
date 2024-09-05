import React from 'react'
import "./Program.css"
import { FaCrown } from "react-icons/fa6";
import { programdatta } from './Program-data';
import { PiCrownSimple } from "react-icons/pi";
import { motion } from 'framer-motion';

const Program = () => {
  return (
    <div 
    className='program-container'>
        <div
       
         className="top-program">
        <span className='svg-container-program'><FaCrown/></span>
      <h2>Our Program</h2>
      </div>
      <div 
      className="program-card-container">
        {
      programdatta.map((item,i)=>(
        <div
        
        
        className="card-program">
            <span className='card-svg-program'><PiCrownSimple/></span>
            <span className='card-program-name'>{item.name}</span>
            <span className='card-program-detail'>{item.detail}</span>
            <div>
<button class="button-program"> Contact Us
</button>
            </div>
        </div>
      ))
        }
      </div>
    </div>
  )
}

export default Program
