import React from 'react'
import '../css/HomePage.css';
import doctorImg from "../Images/portrait-doctor.jpg"

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
          <h1>NAME</h1>
        <div className="image-container ">

    
              <img
        className="round-image"
        src={doctorImg}
        alt="Doctor 1"
      />
    </div>
     <div className="centered-container">
    <h3>Available Bookings</h3>
    <div>
      <Link to="/Cardiology">
        <button>Cardiology</button>
     
      </Link>
      <Link to="/Opthalmology">
        <button>Opthalmology</button></Link>
      
      <Link to="/Gynaecologyt">
        <button>Gynaecology</button></Link>
    </div>
  </div>
  </div>
  )
}

export default HomePage;