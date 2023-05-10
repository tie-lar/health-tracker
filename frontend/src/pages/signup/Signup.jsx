import React, {useState} from 'react';
import './signup.css';


import logo from '../../assets/blk_logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
import { Outlet, Link,  useNavigate} from "react-router-dom";

import axios from 'axios';

const Signup = () => {

  
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

  let navigate = useNavigate();
  const handlechange = e =>{
    setUser(prev=>({...prev, [e.target.name]: e.target.value}));
  };



  const handleSignup = async e => {
    e.preventDefault();
    console.log(user)
    
    if (!user.userName || !user.fullName || !user.email || !user.password) {
      alert("Please fill in all required fields");
      return;
    }
  
    // Check that the password is at least 8 characters long
    if (user.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
  
    // Check that the email address is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      await axios.post("http://localhost:8800/setusers", user)
      navigate("/profile");
    }catch(err){
      console.log(err)
    }


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

export default Signup;