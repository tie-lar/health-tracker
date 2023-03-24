import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='ontrack__footer'>
            <div className='ontrack__footer-content'>
                <div className='footer-text'>
                    <h2>Begin your fitness journey</h2>
                </div>
                <div className='ontrack__footer-content__input'>
                    <input type="email" placeholder='Your email address'/>
                    <button type='button'>Sign Up</button>
                </div>
                <div className='footer-btm-text'>
                    <ul>
                        <li>Product</li>
                        <li>Features</li>
                        <li>Resources</li>
                        <li>© Team106 2023</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer