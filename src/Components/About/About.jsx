import React from 'react'
import "./About.css"
import { IoMdStar } from "react-icons/io";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: false,
      delay:'300', // Whether animation should happen only once
    });
  }, []);

  return (
    <div className='About-container'>
      <div className="about-top-section">
        <div className="txt-about">
          <span className='about-span'>About Us</span>
          <span className='about-detail-span'>Join Our Gym for expert trainers, state-of-the-art equipment, and a motivating community dedicated to your fitness success.</span>
        </div>

      </div>
      <div className="container below-container">
      <div className="below-top-about below-top-about-1">
          <div className="img-container-about" data-aos="zoom-in" data-aos-easing="ease-in-out" >
     <img src="/images/about.2.png" alt="" />
          </div>
          <div className="text-about-below" data-aos="fade-up-right">
                   <h1 className='story'>OUR STORY</h1>
                   <span className='story-detail'>
                    <span> <IoMdStar/></span>
                   Founded in 2010, Our began with a vision to transform fitness experiences. Our founders, passionate about health and community, 
                   created a space where top-tier equipment meets expert guidance. Today, 
                   we’re proud to inspire and support every member on their fitness journey. Join us and be part of our story!
                   </span>
                   <span className='story-detail'>
                   <span> <IoMdStar/></span>
                   Since 2010, our has been dedicated to providing an exceptional fitness experience. Our focus on quality equipment and expert trainers fosters a supportive community for all fitness levels.
                   </span>
                   <span className='story-detail'>
                   <span> <IoMdStar/></span>
                   Our gym started with a simple goal: to create a welcoming fitness community. Since 2010, we’ve combined state-of-the-art equipment with expert trainers to help you achieve your best.
                   </span>
          </div>
      </div>




      <div className="below-top-about">
          <div className="text-about-below" data-aos="fade-down-left">
                   <h1 className='story'>OUR MISSION</h1>
                   <span className='story-detail'>
                    <span> <IoMdStar/></span>
                    Founded in 2010, our mission is to revolutionize fitness by blending state-of-the-art equipment with expert training. Driven by our passion for health and community, we’re dedicated to inspiring and supporting every member on their personal fitness journey. Join us and experience the difference!
                   </span>
                   <span className='story-detail'>
                   <span> <IoMdStar/></span>
                   Since 2010, our has been dedicated to providing an exceptional fitness experience. Our focus on quality equipment and expert trainers fosters a supportive community for all fitness levels.
                   </span>
                   <span className='story-detail'>
                   <span> <IoMdStar/></span>
                   Our gym started with a simple goal: to create a welcoming fitness community. Since 2010, we’ve combined state-of-the-art equipment with expert trainers to help you achieve your best.
                   </span>
          </div>
          <div className="img-container-about" data-aos="zoom-out" data-aos-easing="ease-in-out">
     <img src="/images/about.2.png" alt="" />
          </div>
      </div>
    </div>
    </div>
  )
}

export default About
