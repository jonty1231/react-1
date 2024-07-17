import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  
  return (
    <div className='  container-fluid p-0 m-0'>
     <div className='row row-cols-lg-2 row-cols-sm-1'>
    <div className=''>
  <div className='d-flex  flex-column flex-md-row'>
<div className='d-flex flex-column ps-3 gap-2 '>
    <div className='w-75'>
      <img src="/light-logo2.svg" alt=""  className='w-100 my-4'/>
      <p className=''>No: 58 A, East Madison Street, Alberta, T0J 0Y0, Canada</p>
      <b>+1 00 123456789 / 200 123456789</b>
    </div>
<div className='d-flex flex-column gap-3 slide '>
  <b className='fs-3'>COMPANY</b>
  <p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>HOME</Link></p>
  <p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>ABOUT US</Link></p>

  <p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>TOURS</Link></p>

  <p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>FAQ</Link></p>
  <p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>CONTACT US</Link></p>

</div>
<div className='d-flex flex-column gap-3 slide'>
<b className='fs-3 '>SUPPORT <i className="fa-solid fa-caret-right d-inline d-md-none"></i></b> 
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>CAREERS</Link></p>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>INSURANCE</Link></p>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>MEMBERSHIP</Link></p>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>OFFERS</Link></p>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>GIFT CARDS</Link></p>

</div>
</div>

<div className='mt-2 ms-3'>
<div className='d-flex flex-column gap-3 slide'>
<b className='fs-3'>PLACES</b>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>USA</Link></p>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>ITALY</Link></p>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>CANADA</Link></p>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>AFRICA</Link></p>
<p className='p-0 m-0'> <Link className='text-dark text-decoration-none m-0 p-0'>EUROPE</Link></p>
 
</div>
<div className='d-flex flex-column gap-3 mt-3'>
  <p>GET UPDATE ON NEW TOURS & BLOG NEWS</p>
  <input type="text" name="" id="" placeholder='Email' className=''/>
  <button className='hoverbutton w-50'>Send</button>
  
</div>
<div className='mt-4'>
  <b className='fs-3'>Follow us</b>
  <div className='row w-50 px-3 '>
  
   
    <i className="fa-brands fa-facebook bg-primary fs-4 p-3  col-md-6 col text-white "></i>
   <i className="fa-brands fa-twitter bg-info  fs-4 p-3 col-md-6 col text-white"></i>
 
   <i className="fa-brands fa-pinterest-p bg-secondary  fs-4 p-3 col-md-6 col text-white"></i>
   <i className="fa-brands fa-instagram bg-dark  fs-4 p-3 col-md-6 col text-white"></i>
  
  </div>
</div>

</div>

  </div>
<p className='text-center'>&copy; 2023 ADVEN, <b>WEDESIGNTECH</b></p>

    </div>
<div>
  <img src="/footer-bg.jpg" alt=""  className='w-100'/>
</div>


     </div>


    </div> 
  )
}

export default Footer


