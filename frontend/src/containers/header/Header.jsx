import React from 'react';
import feature from '../../assets/runner_4.png';
import {Outlet, Link} from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <div className='header_container section__padding' id='home'>
      <div className='header_content'>
        <h1 className='header_text'>
            Track your way to great health
        </h1>
        <p>Staying fit has never been easier, with ontrack ensuring your goals are met with daily boosts of encouragement to not just get your heart going, but your confidence too! Like many others, you can begin your fitness journey today. What's stopping you?</p>
        <div className='header-content-input'>
          <input type="email" placeholder='Your email address'/>
          <button type='button'><Link to="/signup">Begin your journey</Link></button>
        </div>
     </div>
      
      <div className='header-image'>
        <img src={feature} alt="" />
      </div>
    </div>
  )
}

export default Header