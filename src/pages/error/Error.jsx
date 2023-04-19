import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './error.css';

const Error = () => {
  return (
    <div className='error_container'>
        <div className='error_content'>
          <h1>Error 404! Page not found. You are lost in digital space, press the home button below to return home</h1>
          <button><Link to="/home"></Link></button>
        </div>
  </div>
  )};

export default Error;
