import React, {useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import { NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import './sidenav.css';
import {
    FaBars,
    FaDumbbell
}from "react-icons/fa";
import {RiHome2Fill} from "react-icons/ri";
import {BiGroup, BiLogOut, BiHelpCircle} from "react-icons/bi";
import {CiSettings} from "react-icons/ci";

const Sidenav = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"HOME",
            icon:<RiHome2Fill/>,
        },
        {
            path:"/workouts",
            name:"WORKOUTS",
            icon:<FaDumbbell/>
        },
        {
            path:"/groups",
            name:"GROUPS",
            icon:<BiGroup/>
        },
        {
            path:"/help",
            name:"HELP CENTRE",
            icon:<BiHelpCircle/>
        },
        {
            path:"/settings",
            name:"SETTINGS",
            icon:<CiSettings/>
        },
        {
            path:"/home",
            name:"LOG OUT",
            icon:<BiLogOut/>
        }
    ]
    return (
        <div className="sidenav_container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
           <img style={{display: !isOpen ? "none": "block"}} src={logo} alt="logo"  />
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">DASHBOARD</h1>
                   <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                  
               </div>
               
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
               
           </div>
           
           <main>{children}</main>
           
        </div>
        
    );
};

export default Sidenav;
