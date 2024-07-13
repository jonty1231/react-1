import React from 'react'
import img from "/Thumb-Slider-01.jpg"
import img2 from "/strock.svg"
const Home_imgsection = () => {
  return (
    <div className='container-fluid p-0 m-0 position-relative home_imgsection '>
<img src={img} alt=""  className=' position-absolute w-100  h-100 top-0'/>
   <div className='position-relative text-white w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
    <h2 className=''>Discover the World</h2>
    <b className=' fs-1'>Plane a trip to the world adventurous </b>
    <img  src="/strock.svg" />
    </div>
       
    </div>
  )
}

export default Home_imgsection