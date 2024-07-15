import React, { useCallback, useRef, useState } from 'react'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home_imgsection = () => {
 
const [imgg,setimg]=useState([{img:"/Thumb-Slider-01.jpg",title:"Discover the World",type:"Plane a trip to the world adventurous"},{img:"/AdobeStock_585370086.png",title:"Thrilled Night camp ",type:"Peacefull weekend Night trip"},
  {img:"/AdobeStock_586872603.png",title:"Discover the Beauty",type:" adventurous Valley trip"},{img:"/AdobeStock_447414502.jpg",title:"Explore World smartly",type:"Luxurious & adventurous trip"}])

  const sliderRef = useRef(null);
  const sliderRef2=useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    sliderRef2.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    sliderRef2.current.swiper.slideNext();
  }, []);




  return (<>
    <div className='container-fluid p-0 m-0 position-relative home_imgsection '>
    <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        // pagination={{
        //   // clickable: true,
        // }}
        ref={sliderRef}
      //  navigation={true}
        navigation={{
          
          prevEl: '.prev',
          nextEl: '.next',
        }}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {imgg.map((info)=>{return<SwiperSlide className='container-fluid p-0 m-0 position-relative home_imgsection ' >
          <img src={info.img} alt=""  className=' position-absolute w-100  h-100 top-0'/>
   <div className='position-relative text-white w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
    <h2 className=''>{info.title}</h2>
    <b className=' fs-1'>{info.type} </b>
    <img  src="/strock.svg" className="w-25 m-5" />
    <div className='d-flex justify-content-center '> <button className=''> TRAVEL GUIDE</button> </div>
    </div></SwiperSlide>})}
     
      </Swiper>

       
    </div>
<div className='container-fluid  row  my-3  justify-content-center align-items-center gap-4'>
<h2 className='col-lg-4 order-2 text-center'> Top  destinations suggested by travelled users</h2>
<div className='col-lg-6  order-1 order-lg-2 position-relative slider2 bottom-lg-0 bottom-5'>
<Swiper
      spaceBetween={50}
      loop={true}
     
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      ref={sliderRef2}
      modules={[ Navigation]}
      className="mySwiper"
      >

 
{imgg.map((imgg,index)=>{ return <SwiperSlide ><img src={imgg.img}  className='w-100 rounded-pill'/></SwiperSlide>})}
</Swiper>

</div>
<div className='col-lg-1 d-flex justify-content-center align-items-center gap-4 order-3'>
<i className="fa-solid fa-arrow-left border rounded-circle p-2 border-dark fs-3  prev" onClick={handlePrev}></i>
<i className="fa-solid fa-arrow-right border rounded-circle p-2 border-dark fs-3 next" onClick={handleNext} ></i>
</div>
</div>


</>
  )
}

// const Sliders=()=>{
//   return(
  
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//   )

// }

export default Home_imgsection