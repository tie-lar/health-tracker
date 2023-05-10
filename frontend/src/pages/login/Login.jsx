import React, { useState, useEffect } from 'react';
import './login.css';
import logo from '../../assets/blk_logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from "react-router-dom";



const Login = () => {

    const [loggedInUser, setloggedInUser] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser !== null) {
        setloggedInUser(storedUser);
      } else {
        console.log("user not logged in");
      }
    }, []);

    const [user, getUser] = useState({
        "email": "",
        "password": "",
    })



    const handlechange = e => {
        getUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };


    const handleLogin = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8800/getusers', user);
            const loggedUser = response.data.iduser;
            localStorage.setItem('user', loggedUser);
            setloggedInUser(loggedUser);
            console.log("user successfully logged in");
            console.log(loggedUser);
            navigate("/profile")
            window.location.reload();
            
        } catch (err) {
            const statusCode = err.response.status;
            if(statusCode === 401){
                alert("Invalid Email Address or Password, Please try again")
            }
            if(statusCode === 500){
                alert("Error logging in, Please try again")
            }
            console.log(err)
        }
    };



    return (
        <div className='login_container'>
            <form action="" className='login_form'>
                <img src={logo} alt="" className='login_logo' />
                <h1>Login</h1>
                <input type="email" placeholder='Email address' className='login_box' name="email" onChange={handlechange} />
                <input type="password" placeholder='Password' className='login_box' name="password" onChange={handlechange} />
                <button type='button' className='account' onClick={handleLogin}>Sign in</button>
                <button type='button' className='sign_google'> <img src={google} alt="" className='google' />Sign in with Google</button>
                <p><Link to="/reset">Forgot your password? <b>Reset</b></Link></p>
            </form>
            <div className='login_side'>
                <img src={image3} alt="" />
            </div>

        </div>
    );

};

export default Login

