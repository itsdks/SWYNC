import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; 
import './index.css';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import CreateAccountPage from './components/CreateAccountPage';

import {
  BrowserRouter,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/Forgot-Password-Page",
//     element:<ForgotPasswordPage/>,
//   },
//   {
//     path: "Create-New-Account",
//     element:<CreateAccountPage/>,
//   },
 
// ]);

ReactDOM.render(
  <React.StrictMode>
 {/* <RouterProvider router={router}/> */}
 <BrowserRouter>
 <App />
 </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')

);
