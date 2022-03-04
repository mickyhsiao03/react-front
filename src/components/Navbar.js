import React, { useState } from "react"
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'



function Navbar() {
  

    return (
      <div className="Nav">
      <img className="logo" src="../ms-icon.png" alt="bcit-logo"></img>
    <p className="title1">TECH HUB </p>
    <p className="title2">Study Room Booking System</p>
    <p className='signin-id'>kkim252@my.bcit.ca</p>    
    <p className='signout-btn'>Signout</p>
      </div>
   
    );
  }
  
  export default Navbar;
  