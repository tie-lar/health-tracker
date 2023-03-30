import React, {useState} from 'react';
import feature from '../../assets/test_image_5.jpg';
//import {BsCircleFill, BsCircle} from "react-icons/bs";
import './features.css';

import {Pagination, EffectCube } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import image1 from '../../assets/test_image.jpg';
import image2 from '../../assets/test_image_2.jpg';
import image3 from '../../assets/test_image_3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

const Features = () => {

  return (
   <>
   <div className='features_main'>

    <div className='features_text'>
      <h1>Demonstration of feature</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quo iure, molestiae ratione cum corrupti corporis laudantium at dolor ullam eum culpa ad, nobis nam alias blanditiis, pariatur reprehenderit placeat?</p>
    </div>
   
   <div className='swiper_box'>
   <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
       
        }}
        pagination={true}
        modules={[EffectCube, Pagination]} 
        className="mySwiper"
      >

        <div className='features_slides'>
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        </div>
        <div className='swiper-pagination swiper-pagination1'></div>
      

      </Swiper>
   </div>
   

      </div>
   
   </>
  )
}

export default Features