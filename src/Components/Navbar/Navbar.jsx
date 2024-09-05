import React, { useState } from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  const handleclick=()=>{
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className='container'>
        <div className="navbar-container">
          <div className="logo-container">
            <img src="/images/logo.png" alt="Logo" />
          </div>

          <ul className={`menu-container ${isMenuOpen ? 'actave' : ''}`}>
            <IoClose className='close-mobile' onClick={toggleMenu} />
            <li>
              <NavLink onClick={handleclick} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
              onClick={handleclick} 
               className={({ isActive }) => (isActive ? 'active' : '')} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink onClick={handleclick} className={({ isActive }) => (isActive ? 'active' : '')} to="/plan">Plan</NavLink>
            </li>
            <li>
              <NavLink onClick={handleclick} className={({ isActive }) => (isActive ? 'active' : '')} to="/trainer">Trainers</NavLink>
            </li>
            <li>
              <NavLink onClick={handleclick} className={({ isActive }) => (isActive ? 'active' : '')} to="/contact">Contact</NavLink>
            </li>
          </ul>
       
          <TiThMenu className='menu-mobile' onClick={toggleMenu} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
