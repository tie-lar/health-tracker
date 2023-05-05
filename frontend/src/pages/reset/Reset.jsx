import React, {useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import logo from '../../assets/logo.png';
import './reset.css';

const Reset = () => {
    return(
        <div className='reset_container'>
            <img src={logo} alt="" />
            <div className='reset_content'>
                <h2>Forgot your password?</h2>
                <p>Please enter the email address you'd like your password reset information sent to</p>
                <div className='reset_email'>
                    
                    <label htmlFor="" id="enter_email">Enter email address</label>
                    <input type="email" placeholder='johndoe@gmail.com'/>
                    <button>Request reset link</button>
                </div>

              
                <p id='reset_text'><Link to="/login">Back to Login</Link></p>
                    
            </div>
        </div>
    )
}

export default Reset;