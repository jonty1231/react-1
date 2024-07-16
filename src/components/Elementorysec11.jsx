import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  Navigation } from 'swiper/modules';
const Elementorysec11 = () => {

const [data,setdata]=useState(["/instagram-image-1.jpg","/instagram-image-2.jpg","/instagram-image-3.jpg","/instagram-image-4.jpg","/instagram-image-5.jpg","/instagram-image-6.jpg","/instagram-image-7.jpg","/instagram-image-8.jpg"])


  return (
    <div className='my-5'>
 
 <Swiper className="mySwiper "  slidesPerView={2} 
        spaceBetween={0}  loop={true} breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            720: {
              slidesPerView: 6,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}     modules={[ Navigation]}>
        {data.map((info)=>{return <SwiperSlide>
            <div  className='position-relative Elementorysec11_div1 '>
                <div className=' position-relative Elementorysec11_div2'>
       <img src={info} alt=""  className='Elementorysec11_img h-100 w-100 '/>
          <div className='Elementorysec11_div'></div>
          </div>
          <i className="fa-brands fa-instagram Elementorysec11_i"></i>

          </div>
        </SwiperSlide>})}

      </Swiper>

    </div>
  )
}

export default Elementorysec11