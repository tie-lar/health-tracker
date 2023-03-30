import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {BsFillCaretLeftFill, BsFillCaretRightFill} from "react-icons/bs";
import image1 from '../../assets/test_image.jpg';
import image2 from '../../assets/test_image_2.jpg';
import image3 from '../../assets/test_image_3.jpg';

import './usergroups.css';

const Usergroups = () => {
    return (
        <div className="container">
          <h1 className="usergroups_header">User Groups</h1>
          <div className='usergroups_slides'>

     
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className='swiper_slide'>
        <SwiperSlide >
          <img src={image1} alt="slide_image" />
        </SwiperSlide >
        <SwiperSlide >
          <img src={image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={image3} alt="slide_image" />
        </SwiperSlide>
        </div>
      
  
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <BsFillCaretLeftFill className='prev_left'/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <BsFillCaretRightFill className='prev_right'/>
          </div>
          <div className="swiper-pagination swiper-pagination2"></div>
        </div>
      </Swiper>
      </div>
    </div>
    )
  }
  
  export default Usergroups