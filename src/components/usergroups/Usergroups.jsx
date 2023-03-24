import React from 'react';
import './usergroups.css';
import feature from '../../assets/feature.png';

const Usergroups = () => {
  return (
    <div className='ontrack_usergroups'>
      <div className='ontrack_usergroups-content'>
        <h1>Heading - Tracker</h1>
        <div className='ontrack_usergtoups-image'>
          <img src={feature} alt="" />
        </div>
        <div className='circle_buttons'>
            <div className='button'></div>
            <div className='button'></div>
            <div className='button'></div>
            <div className='button'></div>
            <div className='button'></div>
        </div>
      </div>
    </div>
  )
}

export default Usergroups