import React, {useState} from 'react';
import './signup.css';
import logo from '../../assets/logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
const Signup = () => {
    return(
        <div className='main'>
            <div className='container'>
                <div className='form'>
                <img src={logo} alt="" className='logo'/>
                <h1>Create an account</h1>
                <form action="">
                <input type="name" placeholder='User name'/>
                <input type="name" placeholder='Full name'/>
                <input type="email" placeholder='Email address'/>
                <input type="password" placeholder='Password'/>
                <button type='button' className='account'>Create account</button>
                <button type='button' className='sign_google'> <img src={google} alt="" className='google'/>Sign Up with Gooogle</button>
                <p>Already have an account? <a href=""><b>Login</b></a></p>
                </form>
               

                </div> 
            <div className='image'>
                <img src={test} alt="" />
            </div>
            </div>
        </div>
    );

};

export default Signup