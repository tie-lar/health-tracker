
import React, {useState} from 'react';
import './signup.css';
import logo from '../../assets/blk_logo.png';
import google from '../../assets/google_logo.png';
import test from '../../assets/test_image.jpg';
import women from '../../assets/women_2.png';
import image3 from '../../assets/image_3.jpg';
import {Outlet, Link} from "react-router-dom";


/*
state = {
    username: '',
    email: '',
    password: '',
    errors: {},
};

const {username, email, password} = this.state; 

*/

const Signup = () => {


    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    const [values, setValues] = useState({
        username:"",
        email:""
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
              "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            className:'signup_box',
            required: true,
          },
          {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
          },
          {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
          },
          {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
              "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
          },
          {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,

        },
    ];
 

    return(
        <div className='signup_container'>
        <form onSubmit={handleSubmit} className='signup_form'>
        <img src={logo} alt="" className='signup_logo'/>
        <h1>Create an account</h1>
        {inputs.map((input) => (
             <input key={input.id}
             {...input}
             value={values[input.name]}
             onChange={onChange} className='signup_box'/>
        ))}
       
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


