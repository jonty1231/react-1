import React, { useState } from 'react'

const Elementorysec4 = () => {

  const [data,setdata]=useState([{url:"/port-2.jpg",text:"CANOE ADVENTURE",location:"Thailand"},{url:"/port-1.jpg",text:"WILD SAFARI",location:"India"},{url:"/port-4.jpg",text:"MOUNTAIN CLIMBING",location:"Kerala"},{url:"/port-5.jpg",text:"KAYAKING",location:"USA"},{url:"/port-3.jpg",text:"ZIP LINE",location:"Australia"},{url:"/port-6.jpg",text:"CANAL RIDE",location:"California"}])


  return (
    <section className='container-fluid'>
       <div className='d-flex justify-content-center flex-column align-items-center py-5 my-5 gap-3'>
     <img src="/svg1.svg" alt="" className=' Elementorysec4_img'/>
        <p>Enjoy with your love</p>
        <b className='fs-1'>Find your best destinations</b>
        </div>

       <div className='row row-cols-lg-4 row-cols-md-3 row-cols-1 gap-5 justify-content-center'>
        
        {data.map((info)=>{return  <div className='bg-white p-3 shadow-lg  Elementorysec4_img_3'>
            <div className='Elementorysec4_img_2'>
            <img src={info.url} alt=""  className='Elementorysec4_img_2 '/></div>
        <p className='fs-3'>{info.text}</p>
        <p><i class="fa-solid fa-location-pin"></i>  {info.location}</p>
          </div>})}
        
         


        </div> 
    </section>
  )
}

export default Elementorysec4
