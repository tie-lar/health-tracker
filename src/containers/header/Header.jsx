import React from 'react';
import feature from '../../assets/feature.png';
import './header.css';

const Header = () => {
  return (
    <div className='ontrack__header section__padding' id='home'>
      <div className='ontrack__header-content'>
        <h1 className='header_text'>
            Track your way to great health
        </h1>
        <p>Staying fit has never been easier, with ontrack ensuring your goals are met with daily boosts of encouragement to not just get your heart going, but your confidence too! Like many others, you can begin your fitness journey today. What's stopping you?</p>
        <div className='ontrack__header-content__input'>
          <input type="email" placeholder='Your email address'/>
          <button type='button'>Begin your journey</button>
        </div>
     </div>
      
      <div className='ontrack__header-image'>
        <img src={feature} alt="" />
      </div>
    </div>
  )
}

export default Header