
import React, {useState} from 'react';
import './signup.css';
import logo from '../../assets/blk_logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
import {Outlet, Link} from "react-router-dom";



const Signup = () => {
    

    return(
        <div className='signup_container'>
        <form action="" className='signup_form'>
        <img src={logo} alt="" className='signup_logo'/>
        <h1>Create an account</h1>
        <input type="name" placeholder='User name' className='signup_box'/>
        <input type="name" placeholder='Full name' className='signup_box'/>
        <input type="email" placeholder='Email address'  className='signup_box'/>
        <input type="password" placeholder='Password'  className='signup_box'/>
        <button type='button' className='account'>Create account</button>
        <button type='button' className='sign_google'> <img src={google} alt="" className='google'/>Sign Up with Gooogle</button>
        <p><Link to="/login">Already have an account? <b>Login</b></Link></p>
        </form>
        <div className='signup_side'>
        <img src={image3} alt="" />  
        </div>

        </div>
       );

};

export default Signup



