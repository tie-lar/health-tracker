import React, {useRef, useState} from 'react';
import './test.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import image1 from '../../assets/test_image.jpg';
import image2 from '../../assets/test_image_2.jpg';
import image3 from '../../assets/test_image_3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';


const Test = () => {

  return (
   <>
   <div className='test_main'>


   
   <div className='swiper_box'>
   <Swiper
    
        grabCursor={true}
        pagination={true}
        modules={[Pagination]} 
        className="mySwiper"
      >

        <div className='test_slides'>
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

export default Test