
import React, {useState} from 'react';
import './login.css';
import logo from '../../assets/blk_logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
import { Outlet, Link } from 'react-router-dom';
const Login = () => {
    return(
        <div className='login_container'>
        <form action="" className='login_form'>
        <img src={logo} alt="" className='login_logo'/>
        <h1>Login</h1>
        <input type="email" placeholder='Email address'  className='login_box'/>
        <input type="password" placeholder='Password'  className='login_box'/>
        <button type='button' className='account'>Sign in</button>
        <button type='button' className='sign_google'> <img src={google} alt="" className='google'/>Sign in with Gooogle</button>
        <p><Link to="/reset">Forgot your password? <b>Reset</b></Link></p>
        </form>
        <div className='login_side'>
        <img src={image3} alt="" />  
        </div>

        </div>
       );

};

export default Login

