
import React, {useState} from 'react';
import './login.css';
import logo from '../../assets/logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
const Login = () => {
    return(
        <div className='container'>
        <form action="" className='form'>
        <img src={logo} alt="" className='logo'/>
        <h1>Login</h1>
        <input type="email" placeholder='Email address'  className='box'/>
        <input type="password" placeholder='Password'  className='box'/>
        <button type='button' className='account'>Sign in</button>
        <button type='button' className='sign_google'> <img src={google} alt="" className='google'/>Sign in with Gooogle</button>
        <p>Forgot your password? <a href=""><b>Reset</b></a></p>
        </form>
        <div className='side'>
        <img src={image3} alt="" />  
        </div>

        </div>
       );

};

export default Login

