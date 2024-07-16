import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Elementorysec8 = () => {
const [data,setdata]=useState([{img:"/Testimonial-image-01.jpg",location:"Califorina",name:"Manish Sharma"},{img:"/history-testimonial-1.jpg",location:"Designer",name:"Amanda"},{img:"/history-testimonial-2.jpg",location:"Lawyer",name:"Russell"},{img:"/history-testimonial-3.jpg",location:"Photography",name:"Wayne juan"}])


  return (
    <section className='container-fluid mt-5 '>
          <div className='d-flex justify-content-center flex-column align-items-center m-0 p-0 pt-5 mt-5'>
     <img src="/svg1.svg" alt="" className=' Elementorysec4_img'/>
        <p className='m-0 p-0'>Our clients & guest</p>
        <b className='fs-1 m-0 p-0'>Testimonials</b>
        </div>
    
    <div className='w-100 row  mx-2 my-5 '>
 <div className='col-11 col-lg-6 mt-3'>
    <img src="/Test-mask-image-01.jpg" alt=""  className='w-100 Elementorysec8_img '/>
 </div>

 <Swiper loop={true} navigation={true}  modules={[Navigation]} className="mySwiper col-11 col-lg-6">

 {data.map((info)=>{return<SwiperSlide className=' mt-3  d-flex flex-column align-items-center'>
        <img src={info.img} alt="" className='w-25  Elementorysec8_img2' />
        <p className='fs-4 my-2'>{info.location}</p>
        <p className='w-75 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab impedit eius veritatis corporis ratione aut maiores tenetur perferendis atque.</p>
        <p className='fs-5'>{info.name}</p>
        <p>
        <i className="fa-solid fa-star star_color"></i>
        <i className="fa-solid fa-star star_color"></i>

        <i className="fa-solid fa-star star_color"></i>
        <i className="fa-solid fa-star star_color"></i>

        <i className="fa-solid fa-star star_color"></i>

        </p>
    </SwiperSlide>})}
      </Swiper>




    


    </div>




    </section>
  )
}

export default Elementorysec8