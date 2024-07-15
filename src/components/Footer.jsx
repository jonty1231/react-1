import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer  container-fluid p-0 m-0'>
      <div className='row  justify-content-center align-items-center pb-5  mt-5 border-bottom'>
       <div className='z_i text-white col-lg-2 d-flex flex-column gap-3   justify-content-center align-items-center'>
        <img src="/light-logo.svg" alt=""  className='w-50 '/>
        <p>No: 58 A, East Madison Street, Alberta, T0J 0Y0, Canada</p>
        <p>+1 00 123456789 / 200 123456789</p>
       </div> 
       <div className='z_i text-white col-lg-6 d-flex  justify-content-around flex-column  flex-md-row gap-5'>
      <div className=' d-flex gap-2 flex-column footer_2 border-left border-lg-left border-lg-white p-4 pb-lg-5 p-lg-0 '>
      <Link to="/" className='text-decoration-none text-white'> Home</Link>
      <Link className='text-decoration-none text-white'>ABOUT US</Link>
      <Link className='text-decoration-none text-white'> TOURS</Link>
      <Link className='text-decoration-none text-white'> FAQ</Link>
      <Link className='text-decoration-none text-white'>CONTACT US</Link>
      </div>
      <div className=' d-flex  gap-2 flex-column footer_2 border-left border-left border-white p-4 pb-lg-5 p-lg-0 '>
      <Link className='text-decoration-none text-white'> ITALY</Link>
      <Link className='text-decoration-none text-white'>CALIFORINA</Link>
      <Link className='text-decoration-none text-white'>THAILAND</Link>
      <Link className='text-decoration-none text-white'>IRELAND</Link>
      <Link className='text-decoration-none text-white'>JERDINIA</Link>
      </div>
      <div className=' d-flex gap-5 flex-column footer_2 border-left border-left border-white p-4 pb-lg-5 p-lg-0 '>
     <b>FOLLOW US</b>
     <div className='row w-75 px-3 '>
     
      
      <i className="fa-brands fa-facebook bg-primary p-3 fs-4  col-md-6 col "></i>
      <i className="fa-brands fa-twitter bg-info p-3 fs-4 col-md-6 col"></i>
    
      <i className="fa-brands fa-pinterest-p bg-secondary p-3 fs-3 col-md-6 col"></i>
      <i className="fa-brands fa-instagram bg-dark p-3  fs-3 col-md-6 col"></i>
     
     </div>
      </div>
      </div>
      <div className='col-lg-3 z_i text-white d-flex gap-3 flex-column footer_2 border-left border-left border-white pb-5 text-center'>
    <p>GET UPDATE ON NEW TOURS & BLOG NEWS</p>
    <form action="" className='d-flex flex-column justify-content-center align-items-center gap-2 '>
      <input type="text" placeholder='Your Name'  className=' w-75 inputElement'/>
      <input type="email" placeholder='Your Email' className=' w-75 inputElement' />
      <button className='w-50 hoverbutton'>SEND MAIL</button>
    </form>
      
    
      </div>
      </div>



      <div className=' text-center z_i text-white  p-3'>
      &copy; 2023 Adven, Wedesigntech
      </div>
    </div> 
  )
}

export default Footer