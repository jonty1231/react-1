
import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Elementorysec11 from '../components/Elementorysec11'
import Footer2 from '../components/Footer2'
const Destinations = () => {
const data=[{img:"/b1.webp",country:"INDIA",size:"big"},{img:"/b2.webp",country:"CHINA",size:"small"},{img:"/b3.webp",country:"THAILAND",size:"small"},{img:"/b4.webp",country:"JAPAN",size:"big"},{img:"/b5.webp",country:"UNITED KINGDOM",size:"big"},{img:"/b6.webp",country:"SINGAPORE",size:"small"}]

  return (


    <>
    <div className='container-fluid  p-0 m-0   '> 
     <div className='position-absolute  w-100 top-0'><Header />
     <NavBar /></div>
     <div className='position-relative blog_img_div'>
<img src="/Breadcrumb.jpg" alt=""  className='w-100 blog_img h-100  '/>
<div className='w-100 h-100 blog_innerdiv justify-content-end d-flex flex-column align-items-center text-white pb-5 mb-5'>
<b className='fs-1 blog_innerdiv'>DESTINATIONS</b>
<p className='fs-4 mb-5 pb-2 blog_innerdiv'>Home - Destinations</p>
</div>
</div>
</div>
<section className='blog_section d-flex flex-column align-items-center  p-5 m-5'>
<b className='fs-2'>Choose your best places to visit
</b>
<p className=' fs-5  text-center'>Volutpat commodo sed egestas egestas fringilla. Pellentesque <br className=' d-none d-lg-block' /> necnam aliquam sem et tortor consequat id porta. Pharetra sit amet aliquam id diam maecenas. s</p>
</section>
  <section className='row m-0 p-0'>
  
    
    
{data.map((info,index)=>{ return <ListItem  key={index} img={info.img} country={info.country} widt={info.size=="big"?"col-lg-8 ":"col-lg-4 "}/>})}


    </section>  

    <Elementorysec11 />
    <Footer2 />
    </>
  )
}

const ListItem=( {img,country,widt})=>{
    return(<>
            <div className={` ${widt} my-2 col-md-6 col-12 position-relative animetextuper `}>
        <img src={img} alt=""  className='h-100 w-100'/>
        <div className=' position-absolute w-100 h-100 top-0 start-0  d-flex flex-column justify-content-center align-items-center  gap-3 animetext'>
     <b className='border border-2 p-2 px-4 text-white fs-4 '>{country}</b>
     <p className='text-center text-white '>At varius vel pharetra vel turpis nunc eget lorem. Arcu vitae rbelementum curabiturvitae. Erat pellentesque adipiscing.</p>
     <button className='hoverbutton '> CLICK VISIT</button>
     </div>
        </div> </>
    )
}

export default Destinations