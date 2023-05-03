import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import './error.css';

const Error = () => {
  return (
    <div className='error_container'>
        <div className='error_content'>
          <h1>404</h1>
          <h2>Oops, page not found</h2>
          <p>Unfortunately the page you've requested cannot be found. Press the button below to return home</p>
          <button><Link to="/home">Home</Link></button>
        </div>
  </div>
  )};

export default Error;
