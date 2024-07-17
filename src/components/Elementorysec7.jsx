import React, { useEffect, useState } from 'react'

const Elementorysec7 = () => {
    const [data,setdata]=useState([{img:"/iso-image-1.jpg",country:["canada","india","all"]},{img:"/iso-image-2.jpg",country:["australia","switerland","thailand","all"]},{img:"/iso-image-3.jpg",country:["australia","canada","india","switerland","all"]},{img:"/iso-image-4.jpg",country:["india","switerland","thailand","all"]},{img:"/iso-image-5.jpg",country:["australia","canada","thailand","all"]},{img:"/iso-image-6.jpg",country:["australia","india","thailand","all"]}])

    let [country_name,setcountry_name]=useState("all")
    const img_handel=(e)=>{
        setcountry_name(e)
       
    }
  return (
    <section className='container-fluid my-5 '>  
         <div className={`d-flex justify-content-center flex-column align-items-center pt-5 mt-5 gap-2 `}>
     <img src="/svg1.svg" alt="" className=' Elementorysec4_img'/>
        <p>Enjoy with your love</p>
        <b className='fs-1'>Our Best Places</b>
        </div>
<div className='w-100 row justify-content-center gap-4 m-3 row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6'>
  <button className={` col-lg-1 ${country_name=="all"?"hoverbutton2":"hoverbutton"} `}  onClick={()=>img_handel("all")}>All</button>
  <button className={` col-lg-1 ${country_name=="australia"?"hoverbutton2":"hoverbutton"} `}  onClick={()=>img_handel("australia")}>Australia</button>
  <button className={` col-lg-1 ${country_name=="canada"?"hoverbutton2":"hoverbutton"} `}  onClick={()=>img_handel("canada")}>Canada</button>
  <button className={` col-lg-1 ${country_name=="india"?"hoverbutton2":"hoverbutton"}`}  onClick={()=>img_handel("india")}>India</button>
  <button className={` col-lg-1 ${country_name=="switerland"?"hoverbutton2":"hoverbutton"} `}  onClick={()=>img_handel("switerland")}>Switerland</button>
  <button className={` col-lg-1 ${country_name=="thailand"?"hoverbutton2":"hoverbutton"} `}  onClick={()=>img_handel("thailand")}>Thailand</button>
</div>

<div className='w-100 row row-cols-1 row-cols-lg-3 row-cols-md-2  justify-content-between '>

{data.map((info)=>{ return info.country.includes(country_name)?
     <div className='position-relative mt-3 '>
    <div className='  Elementorysec7_div '></div>
    <img src={info.img} alt="" className='Elementorysec7_img' />
</div>  :""})}




</div>


    </section>
  )
}

export default Elementorysec7