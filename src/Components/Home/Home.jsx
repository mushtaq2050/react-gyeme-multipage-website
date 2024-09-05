import React from 'react'
import "./Home.css"
import { motion } from 'framer-motion';
import Program from "../Program/Program"
import Values from '../Values/Values'
import Question from '../Askedquestion/Question'
import Testimonial from '../Testimonial/Testimonial'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const Home = () => {

  
  useEffect(() => {
    const blocks = document.querySelectorAll('.block');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
            console.log('Adding animation to:', entry.target); // Debugging log
            // Add animation class only when scrolling down
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing after the first animation
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the element is visible
    );

    blocks.forEach((block) => {
      observer.observe(block);
    });

    return () => {
      blocks.forEach((block) => {
        observer.unobserve(block);
      });
    };
  }, []);



  return (
    <div className='container'>
      <div className="home-container">
        <div
         className="home-text-container">
          <span
       
          
          className='span-text-home'>#100DaysWorkOut</span>
          <h2>Join The legends of <br /> The Fitness World</h2>
          <p  className='p-home-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi iusto ut aliquam accusamus?Aliquam, alias eveniet? Dolore!</p>
        
             <div>
             <Link to="/contact">
             <button className='btn-home'> <span>Get Started</span>
</button>
             </Link>
             </div>
        </div>
        <div
     
       
        className="home-img-container">
 
       <img src="/images/main_header.png" alt="" />
        </div>
      </div>
      <div className='program block'>
      <Program/>
      </div>
      <div className='value block'>
      <Values/>
      </div>
      <div className='faqss block'>
      <Question/>
      </div>
      <div className='testimonial block'>
      <Testimonial/>
      </div>
    </div>
  )
}

export default Home
