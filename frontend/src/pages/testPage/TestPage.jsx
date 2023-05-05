
import React, { useState } from 'react';
import './testPage.css';
import logo from '../../assets/blk_logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
import { Outlet, Link,  } from "react-router-dom";

import axios from 'axios';

const TestPage = () => {
  // const [userName, setUserName] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    "userName": "",
    "fullName": "",
    "email": "",
    "password": "",
  })


  const handlechange = e =>{
    setUser(prev=>({...prev, [e.target.name]: e.target.value}));
  };



  const handleSignup = async e => {
    e.preventDefault();
    console.log(user)
    
    try {
      await axios.post("http://localhost:8800/setusers", user)
    }catch(err){
      console.log(err)
    }

    // if (!userName || !fullName || !email || !password) {
    //   alert("Please fill in all required fields");
    //   return;
    // }
  
    // // Check that the password is at least 8 characters long
    // if (password.length < 8) {
    //   alert("Password must be at least 8 characters long");
    //   return;
    // }
  
    // // Check that the email address is in a valid format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   alert("Please enter a valid email address");
    //   return;
    // }

    // // Make a POST request to the server to create a new user account
    // fetch('/signup', {
        
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: userName,
    //     fullName: fullName,
    //     email: email,
    //     password: password
    //   })
    // })
    // .then(response => {
    //   console.log(response);
      
    //   // TODO: Handle the response as needed (display a success message to the user)
    // })
    // .catch(error => {
    //   console.log(error);
    //   console.log(userName)
    //   // TODO: Handle the error as needed ( display an error message to the user)
    // });
  };

  return (
    <div className='signup_container'>
      <form action="" className='signup_form'>
        <img src={logo} alt="" className='signup_logo'/>
        <h1>Create an account</h1>
        <input type="name" placeholder='User name' className='signup_box' name="userName" onChange={handlechange} />
        <input type="name" placeholder='Full name' className='signup_box' name="fullName"  onChange={handlechange} />
        <input type="email" placeholder='Email address' className='signup_box' name="email" onChange={handlechange} />
        <input type="password" placeholder='Password' className='signup_box' name="password" onChange={handlechange} />
        <button type='button' className='account' onClick={handleSignup}>Create account</button>
        <button type='button' className='sign_google'> <img src={google} alt="" className='google'/>Sign Up with Gooogle</button>
        <p><Link to="/login">Already have an account? <b>Login</b></Link></p>
      </form>
      <div className='signup_side'>
        <img src={image3} alt="" />  
      </div>
    </div>
  );
};

export default TestPage;


