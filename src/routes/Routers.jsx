import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../components/HomePage';
import LoginPage from '../LoginPage';
import CreateAccountPage from '../components/CreateAccountPage';
import Cardiology from '../components/Cardiology';
const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/patient/home" element={<HomePage />}  />
        <Route path='/CreateAccountPage' element={<CreateAccountPage />} />
        <Route path="/Cardiology" element={<Cardiology />} />

    </Routes>
  )
}

export default Routers