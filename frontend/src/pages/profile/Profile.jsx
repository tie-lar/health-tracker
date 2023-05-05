import React, {useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import './profile.css';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Profile = () => {

    
const [isShown, setIsShown] = useState(false);


const handleClick = event => {
    setIsShown(current => !current);

};

    return(
        <div className='profile_container gradient__bg'>
         <h1 className="heading">Create Profile</h1>

      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination-3'}}
        navigation={{
          nextEl: '.swiper-button-next next-slide', 
          prevEl: '.swiper-button-prev prev-slide',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container "
      >
        <SwiperSlide className='swiper-slide-2'>
        
          <form action="" className='slide slide-one'>
            <h1>What do you aim to accomplish with Health Tracker?</h1>
            <h2>Select all that apply</h2>
            
           
            <div className='selections'>
            <label className='options' >Weight loss</label>
            <input type="checkbox" id='option_one'/>
            </div>
            
            <div className='selections'>
            <label className='options' >Weight gain</label>
            <input type="checkbox" id='option_two'/>
            </div>

            <div className='selections'>
            <label className='options' >A routine</label>
            <input type="checkbox" id='option_three'/>
            </div>

            <div className='selections'>
            <label className='options' >To be healthier</label>
            <input type="checkbox" id='option_four'/>
            </div>

            <div className='profile_buttons'>
                <button className=' next-slide'>Next</button>
            </div>
            



          </form>
        </SwiperSlide>
        <SwiperSlide>
         
          <form action="" className='slide slide-two'>
            <h1>What exercises would you like to see?</h1>
            <div className='selections'>
            <label className='options' >Upper body</label>
            <input type="checkbox" id='option_5'/>
            </div>
            
            <div className='selections'>
            <label className='options' >Lower body</label>
            <input type="checkbox" id='option_6'/>
            </div>

            <div className='selections'>
            <label className='options' >Full body</label>
            <input type="checkbox" id='option_7'/>
            </div>

            <div className='selections'>
            <label className='options' >Core muscles</label>
            <input type="checkbox" id='option_8'/>
            </div>

            <div className='profile_buttons'>
                <button className='next-slide'>Next</button>
            </div>
          </form>
        </SwiperSlide>
        <SwiperSlide>
         
          <form action="" className='slide slide-three'>
            <h1>What gender best describes you?</h1>
            <div className='selections'>
            <label className='options' >Male</label>
            <input type="checkbox" id='option_9'/>
            </div>
            
            <div className='selections'>
            <label className='options' >Female</label>
            <input type="checkbox" id='option_10'/>
            </div>

            <div className='selections'>
            <label className='options' >Nonbinary</label>
            <input type="checkbox" id='option_11'/>
            </div>

            <div className='profile_buttons'>
                <button className='next-slide'>Next</button>
            </div>
          </form>
        </SwiperSlide>
        <SwiperSlide>
          
          <form action="" className='slide slide-four'>
            <h1>What type of exercises do you want targeted towards you?</h1>
            <div className='selections'>
            <label className='options' >Exercises targeted towards men</label>
            <input type="checkbox" id='option_12'/>
            </div>

            <div className='selections'>
            <label className='options' >Exercises targeted towards women</label>
            <input type="checkbox" id='option_13'/>
            </div>

   
            <div className='profile_buttons'>
                <button className='next-slide'>Next</button>
            </div>
          </form>
        </SwiperSlide>
        <SwiperSlide>
          
          <form action="" className='slide slide-five'>
            <h1>You're now ready to begin your journey to good health!</h1>
           
            <div className='profile_buttons'>
                <Link to='/dashboard'> <button>Let's Start!</button></Link>
                
            </div>
          </form>
        </SwiperSlide>

        <div className="slider-controler">
          <div className=" slider-arrow">
          </div>
          <div className="swiper-pagination-3"></div>
        </div>
      </Swiper>
            
        </div>
    )
}

export default Profile;