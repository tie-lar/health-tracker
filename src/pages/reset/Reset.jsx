import React, {useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import logo from '../../assets/blk_logo.png';
import './reset.css';

const Reset = () => {
    return(
        <div className='reset_container'>
            <img src={logo} alt="" />
            <div className='reset_content'>
                <h2>Forgot your password?</h2>
                <p>Please enter the email address you'd like your password reset information sent to</p>
                <input type="email" placeholder='Enter email address'/>
                <button>Request reset link</button>
                <p><Link to="/login">Back to Login</Link></p>
                    
            </div>
        </div>
    )
}

export default Reset;