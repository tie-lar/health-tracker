import React, {useState} from 'react';
import './test.css';
import logo from '../../assets/logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
const Test = () => {
    return(
        <div className='container'>
        <form action="" className='form'>
        <img src={logo} alt="" className='logo'/>
        <h1>Create an account</h1>
        <input type="name" placeholder='User name' className='box'/>
        <input type="name" placeholder='Full name' className='box'/>
        <input type="email" placeholder='Email address'  className='box'/>
        <input type="password" placeholder='Password'  className='box'/>
        <button type='button' className='account'>Create account</button>
        <button type='button' className='sign_google'> <img src={google} alt="" className='google'/>Sign Up with Gooogle</button>
        <p>Already have an account? <a href=""><b>Login</b></a></p>
        </form>
        <div className='side'>
        <img src={image3} alt="" />  
        </div>

        </div>
       );

};

export default Test