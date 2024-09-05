import React from 'react'
import './Contact.css'
import { CgMail } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="about-top-section-plan">
        <div className="txt-plan">
          <span className='about-span-plan'>Get In Touch</span>
          <span className='about-detail-span-plan'>Join us to access expert trainers, cutting-edge equipment, and a supportive community dedicated to your fitness success. Find the perfect plan that fits your goals and lifestyle!

</span>
        </div>
      </div>
    <div className='container'>
        <div className="logos-contact-container">
          <span className="logo-1-footer">
            <a href="mailto:mushtaqulhassan150@gmail.com" target='_blank' rel='noreferrer noopener'>
          <CgMail/>
          </a>
          </span>
          <span className="logo-1-footer">
          <a href="https://www.facebook.com/profile.php?id=61552415504214" target='_blank' rel='noreferrer noopener'>
          <RiMessengerLine/>
          </a>
          </span>
          <span className="logo-1-footer">
          <a href="https://wa.me/+923270503249" target='_blank' rel='noreferrer noopener'>
          < ImWhatsapp />
          </a>
          </span>
        </div>
    </div>
  </div>
  )
}

export default Contact
