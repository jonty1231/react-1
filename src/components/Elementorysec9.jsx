import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Elementorysec9 = () => {
    const [data,setdata]=useState([{img:"/blog-1.webp",text:"Guidelines For International Travel"},{img:"/blog-2.webp",text:"Family Vacation Destinations Tips"},{img:"/blog-3.webp",text:"Cheap Europe Tour Packages"},{img:"/blog-4.webp",text:"Destinations For Next Excursion"}])


  return (
    <section className='my-5 py-5'>
    <div className='d-flex justify-content-center flex-column align-items-center m-0 p-0 pt-5 mt-5'>
     <img src="/svg1.svg" alt="" className=' Elementorysec4_img'/>
        <p className='m-0 p-0'>Travel information</p>
        <b className='fs-1 m-0 p-0'>Travel News & Updates</b>
        </div>
        <section className='container-fluid row justify-content-center align-items-center  row-cols-lg-4 my-5 pb-5'>

{data.map((info)=>{return<div className=' col-md-5 col-11 p-2'>
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



    </section>
  )
}

export default Elementorysec9