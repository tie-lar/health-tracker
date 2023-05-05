import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiCloseLine} from 'react-icons/ri';
import {AiFillHome,AiOutlineUsergroupDelete, AiFillSetting} from 'react-icons/ai'
import {BiDumbbell, BiHelpCircle} from 'react-icons/bi'
import { Outlet, Link } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/logo.png';


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

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
              <p><Link to="/login">Login</Link></p>
                <button type="button"> <Link to="/signup">Signup</Link></button>
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

export default Navbar;


