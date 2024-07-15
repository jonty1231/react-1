import React, { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Elemontrysec2 = () => {
const [data,setdata]=useState([{img:"/home-1-carousel-1.jpg",text:"Romania"},{img:"/image-box-image01.jpg",text:"Thailand"},{img:"/image-box-image02.jpg",text:"USA"},{img:"/image-box-image03.jpg",text:"India"}])

const sliderRef3 = useRef(null);


const handlePrev = useCallback(() => {
  if (!sliderRef3.current) return;
  sliderRef3.current.swiper.slidePrev();
 
}, []);

const handleNext = useCallback(() => {
  if (!sliderRef3.current) return;
  sliderRef3.current.swiper.slideNext();
 
}, []);





  return (
    <section className='container ms-5 ps-5 row justify-content-center  '>
<div className='col-lg-4 '>
    <div className='w-50'>
     <img src="/svg1.svg" alt=""  className='w-25'/></div>
     <p className='fs-4'>Cherished your memories</p>
     <b className='w-100 fs-1'>Explore World</b>
     <p>Fermentum odio eu feugiat pretium nibh. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Lectus proin nibh nisl condimentum id venenatis.</p>
</div>
<div className='col-lg-8  '>
<Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        ref={sliderRef3}

     
        breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
           modules={[ Navigation]}
        className="mySwiper"
      >

        {data.map((info)=>{return <SwiperSlide>
            <div className=' position-relative d-flex flex-column justify-content-center align-items-center Elemontrysec2_scroller   overflow-hidden'>
<img src={info.img} alt="" className=' w-100 h-100 '/>
 <b className='z_i position-absolute '>{info.text}</b>
<p className='z_i position-absolute text-center'>Explore Beaches, forests, jungles Mountaines </p>
 <div className='text-center z_i position-absolute'><Link>Read more</Link></div>
</div>
        </SwiperSlide>})}


</Swiper>
<div className='d-flex justify-content-center my-5 gap-2'>
<i class="fa-solid fa-arrow-left border border-dark rounded-circle p-3" onClick={handlePrev}></i>
<i class="fa-solid fa-arrow-right border border-dark rounded-circle p-3" onClick={handleNext}></i>
</div>
</div>

    </section>
  )
}

export default Elemontrysec2