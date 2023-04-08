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
    <p><a href="#wontrack">What is ontrack?</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#tutorial">Tutorial</a></p>
    </>
  )

  const Menu2 = () => (
    <>
    <p><Link to="/home">Home</Link></p>
    <p><a href="#wontrack">What is ontrack?</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#tutorial">Tutorial</a></p>
    <p><a href="login">Login</a></p>
    <p><a href="signup">Sign Up</a></p>
    </>
  )

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ontrack__navbar'>
            <div className='ontrack__navbar-links'>
                <div className='ontrack__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='ontrack__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='ontrack__navbar-sign'>
                <p><a href="#login">Login</a></p>
                <button type="button">Sign Up</button>
            </div>

            {/*Hamburger menu=true meaning the default view would be seeing the three lines, when clicked, it'll change to the cross icon*/}
            <div className='toggle_menu'> {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <GiHamburgerMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {/*If the menu is toggled then...*/}
            {toggleMenu && (
                <div className='ontrack__navbar-menu_container scale-up-center'>
                    <div className='ontrack__navbar-menu_container-links'>
                        <Menu2 />
                        <div className='ontrack__navbar-menu_container-links-sign'>
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
