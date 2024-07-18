import React from 'react'
import { Link } from 'react-router-dom'

const Footer2 = () => {
  return (
<section className='position-relative '>
    <div className='footer_2 '>

    </div>
    <img src="/Main-footer-bg.jpg" alt=""  className='position-absolute top-0 start-0 w-100 h-100 z_i2'/>
<div className='row text-white m-0 p-0 py-5 justify-content-center gap-4   border-bottom'>
 <div className='col-lg-2 col-12 d-flex flex-column   align-items-center text-center '>
<div><img src="light-logo.svg" alt=""  className='w-50'/></div>
<p >No: 58 A, East Madison Street, Alberta, T0J 0Y0, Canada</p>
<b>+1 00 123456789 / 200 123456789</b>

 </div>
 <div className='col-lg-2 col-md-3 col-9 d-flex flex-column gap-2 border-start py-4 ps-0'>
  <Link className='text-decoration-none text-white'>HOME</Link>
  <Link className='text-decoration-none text-white'>ABOUT US</Link>
  <Link className='text-decoration-none text-white'>TOURS</Link>
  <Link className='text-decoration-none text-white'>FAQ</Link>
  <Link className='text-decoration-none text-white'>CONTACT US</Link>
</div>
<div className='col-lg-2 col-md-3 col-9 d-flex flex-column gap-2 border-start py-4 ps-0'>
<Link className='text-decoration-none text-white'>ITALY</Link>
<Link className='text-decoration-none text-white'>CALIFORINA</Link>
<Link className='text-decoration-none text-white'>THAILAND</Link>
<Link className='text-decoration-none text-white'>IRELAND</Link>
<Link className='text-decoration-none text-white'>JERDINIA</Link>

</div>
<div className='col-lg-2 col-md-3 col-9 border-start py-4  d-flex flex-column gap-5'>
<Link className='text-decoration-none text-white'>FOLLOW US</Link>

<div className='row  w-75  gap-1 '>
<i className="fa-brands fa-facebook bg-success  col-4  p-3 " ></i>
<i className="fa-brands fa-twitter  bg-dark col-4 p-3 "></i>
<i className="fa-brands fa-pinterest-p bg-dark  col-4  p-3"></i>
<i className="fa-brands fa-instagram  bg-success col-4  p-3"></i>
</div>



</div>
<div className='col-lg-2 col-md-7 col-9 p-0 m-0 '>
<p>GET UPDATE ON NEW TOURS & BLOG NEWS</p>
<form action="" className='d-flex flex-column gap-4'>
<input type="text"  placeholder='Your Name' className=' i_footer'/>
 <input type="email" name="" id="" placeholder='Your Email' className=' i_footer' />
 <button className='hoverbutton w-75'>Send Email</button>
</form>


</div>
</div>

<div className='text-center py-4 text-white'>
&copy; 2023 Adven,<b> Wedesigntech</b>
</div>
</section>  )
}

export default Footer2