import React from 'react'
import { plandata } from './Plandata'
import "./Plan.css"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import { useEffect } from 'react';

const Plan = () => {

  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false,
      delay:'300', // Whether animation should happen only once
    });
  }, []);


  return (
    <div className='plant-container'>
     <div className="about-top-section-plan">
        <div className="txt-plan">
          <span className='about-span-plan'>Membership Plan</span>
          <span className='about-detail-span-plan'>Join us to access expert trainers, cutting-edge equipment, and a supportive community dedicated to your fitness success. Find the perfect plan that fits your goals and lifestyle!

</span>
        </div>
      </div>
      <div className="container">
      <h1 className='trainers-plan plan-h' data-aos="zoom-in" data-aos-easing="ease-in-out">OUR PLANS</h1>
        <div className="cards-plan-container" >
          {
         plandata.map((item,i)=>(
          <div className="plan-card" data-aos="fade-up" data-aos-easing="ease-in-out">
            <span className='plan-name'>{item.name}</span>
            <span className='plan-detail'>{item.detail}</span>
            <span>
            <span className='plan-price'>{item.price}</span>
            <span className='month'>/mo</span>
            </span>
            <div>
            <Link to="/contact">
            <button className='plan-btn'>
   PurchasE
</button>
            </Link>
            </div>
          </div>
         ))
          }
        </div>
      </div>
    </div>
  )
}

export default Plan
