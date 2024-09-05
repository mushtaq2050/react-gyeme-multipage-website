import React from 'react'
import "./Trainers.css"
import { trainerdata } from './Trainerdata'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import AOS from 'aos';
import { useEffect } from 'react';

const Trainers = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false,
      delay:'300', // Whether animation should happen only once
    });
  }, []);

  return (
    <div className='trainers-container'>
       <div className="about-top-section">
        <div className="txt-about">
          <span className='about-span'>Our Trainers</span>
          <span className='about-detail-span'>in our gym to work with highly skilled trainers who provide personalized guidance and motivation. Our experts are dedicated to helping you achieve your fitness goals and exceed your expectations!.</span>
        </div>

      </div>
      <div className="container trainer-h">
        <h1 className='trainers-plan' data-aos="fade-down">OUR TRAINERS</h1>
        <div className="below-trainer-container">
         {
   trainerdata.map((itam,i)=>(
    <div className="trainer-card" data-aos="zoom-in" data-aos-easing="ease-in-out">
      <span className='image-container-trainer'>
      <img src={itam.img}  alt="" />
      </span>
      <div className="name-data-trainer">
      <span className='trainer-name'>{itam.name}</span>
      <span className='trainer-work'>{itam.work}</span>
      </div>
      <div className="logos-container-trainer">
        <span className='logo-2'>
        <a href="https://www.linkedin.com/in/mushtaq-ul-hassan-8865872b0/" target='_blank' >
        <FaLinkedinIn/>
        </a>
        </span>
        <span className='logo-2'>
          <a href="https://www.facebook.com/profile.php?id=61552415504214" target='_blank'>
        <FaFacebookF />
        </a>
        </span>
        <span className='logo-2'>
        <FaTwitter />
        </span>
      </div>
    </div>
   ))
         }
        </div>
      </div>
    </div>
  )
}

export default Trainers
