import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';
import { AiFillHome, AiOutlineUsergroupDelete, AiFillSetting } from 'react-icons/ai'
import { BiDumbbell, BiHelpCircle } from 'react-icons/bi'
import { Outlet, Link } from "react-router-dom";
import './navbarLogged.css';
import logo from '../../assets/logo.png';


import axios from 'axios';


//BEM -> Block Element Modifier


//Storing the menu info into variables: Menu and Menu2
const Menu = () => (
  <>
    <p><Link to="/home">Home</Link></p>
    <p><Link to="/dashboard">Dashboard</Link></p>
    <p><Link to="/error">Error</Link></p>
    <p><Link to="/wontrack">What is ontrack?</Link></p>
    <p><Link to="/features">Features</Link></p>
    <p><Link to="/tutorial">Tutorial</Link></p>
  </>
)

const Menu2 = () => (
  <>
    <p><Link to="/home">Home</Link></p>
    <p><Link to="/wontrack">What is ontrack?</Link></p>
    <p><Link to="/features">Features</Link></p>
    <p><Link to="/tutorial">Tutorial</Link></p>
    <p><Link to="/login">Login</Link></p>
    <p><Link to="/signup">Signup</Link></p>
  </>
)

const NavbarLogged = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [receivedUserName, setReceivedUserName] = useState("User");

  const storedUser = localStorage.getItem('user');
  


  const handleLogout = () => {
    const loggedoutUser = null;
    localStorage.setItem('user', loggedoutUser);
    console.log("user logged out successfully");
    window.location.reload(false);
  };

  const getUserName = async () => {
    try {
      const response = await axios.get('http://localhost:8800/getuserbyid', { params: { id: storedUser} });
      //console.log(response.data);
      setReceivedUserName(response.data.userName);
  
    } catch (err) {
      console.log(err)
    }
  };


  useEffect(() => {
    if (storedUser !== "null") {
      console.log("user logged in");
      getUserName();
    } else {
      console.log("user logged out")
    }
  }, [storedUser]);

  //gettheuserby id and then get the username to be displayed on each page
  return (
    <div className='home__navbar'>
      <div className='home_navbar-links'>
        <div className='home_navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='home_navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className='home_navbar-sign'>
        <p><Link to="/account">{receivedUserName}</Link></p>
        <button type="button" onClick={handleLogout}>logout</button>
      </div>

      {/*Hamburger menu=true meaning the default view would be seeing the three lines, when clicked, it'll change to the cross icon*/}
      <div className='toggle_menu'> {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <GiHamburgerMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {/*If the menu is toggled then...*/}
        {toggleMenu && (
          <div className='home_navbar-menu-container scale-up-center'>
            <div className='home_navbar-menu-container-links'>
              <Menu2 />
              <div className='home_navbar-menu-container-links-sign'>
                <p><a href="#login">Login</a></p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarLogged;


