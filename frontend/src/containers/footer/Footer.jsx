import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <div className='footer_container gradient2__bg'>
            <div className='footer-content'>
                <div className='footer-text'>
                    <h2>Begin your fitness journey</h2>
                </div>
                <div className='footer-content-input'>
                    <input type="email" placeholder='Your email address'/>
                    <button type='button'><Link to="/signup">Sign Up</Link></button>
                </div>
                <div className='footer-btm-text'>
                    <ul>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li>© Team106 2023</li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/support">Support</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer