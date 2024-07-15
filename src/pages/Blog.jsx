import React, { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Blog = () => {
const [data,setdata]=useState([{img:"/blog-1.webp",text:"Guidelines For International Travel"},{img:"/blog-2.webp",text:"Family Vacation Destinations Tips"},{img:"/blog-3.webp",text:"Cheap Europe Tour Packages"},{img:"/blog-4.webp",text:"Destinations For Next Excursion"},{img:"/blog-5.webp",text:"Why Travel Insurance Is Mandatory"},{img:"/blog-6.webp",text:"Popular Locations In Canada"},{img:"/blog-7.webp",text:"Summer Trekking Camps"},{img:"/blog-8.webp",text:"20 Best Honeymoon Destinations"},{img:"/blog-9.webp",text:"Senior Citizen Tour Packages"},{img:"/blog-10.webp",text:"Trip To Arrange With Friends"},{img:"/blog-11.webp",text:"Explore Great Caravan Routes"},{img:"/blog-12.webp",text:"Don’ts Of Vacation Planning"}])





  return (
   <>
     <div className='container-fluid  p-0 m-0   '> 
     <div className='position-absolute  w-100 top-0'><Header />
     <NavBar /></div>
     <div className='position-relative blog_img_div'>
<img src="/Breadcrumb.jpg" alt=""  className='w-100 blog_img h-100  '/>
<div className='w-100 h-100 blog_innerdiv justify-content-end d-flex flex-column align-items-center text-white pb-5 mb-5'>
<b className='fs-1 blog_innerdiv'>BLOG</b>
<p className='fs-4 mb-5 pb-2 blog_innerdiv'>Home - Blog</p>
</div>
</div>
</div>
<section className='blog_section d-flex flex-column align-items-center  p-5 m-5'>
<p className='fs-5'>Daily updates & news</p>
<b className='fs-2'>Our Blogs</b>
</section>

<section className='container-fluid row justify-content-center align-items-center gap-lg-5 row-cols-lg-5 my-5 pb-5'>

{data.map((info)=>{return<div className=' col-md-5 col-11 '>
<div className='position-relative w-100  blog_img_section2 '>
<img src={info.img} alt=""  className='w-100  ' />
{/* <span className='position-absolute   blog_img2_section2 '>
<i className="fa-regular fa-calendar-days"></i>
<p>April 27 2023</p>
</span> */}

<div className='blog_section_text position-absolute bottom-0 pb-3 ps-3'>
<p className='fs-lg-1  pe-3 '>{info.text}</p>
<Link className=" fs-4" >Read More</Link>
</div>
</div>
</div>})}

   


</section>

<section className='SLider_section container-fluid'>
<Swiper
        slidesPerView={6}
        spaceBetween={15}
        loop={true}
     
      >
        {data.map((info)=>{return  <SwiperSlide   ><img src={info.img} alt="" className='w-100 h-50'/></SwiperSlide> })}
      </Swiper>

</section>

<Footer />
   </>
  )
}

export default Blog 
