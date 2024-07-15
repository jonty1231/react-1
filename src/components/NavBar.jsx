import React, { useState } from 'react'
import {Link, NavLink} from "react-router-dom"


const NavBar = () => {
let [togle,settoggle]=useState(false)

  const togglenav=()=>{
settoggle(!togle)
  }

  return (
   <div className=' d-flex justify-content-between px-5 py-5 container-fluid  navbar'>
   <Link to="/" className=''><img src="/light-logo.svg" alt="" className='w-75'/></Link>
 
   <nav className={ `d-flex  flex-lg-row flex-column justify-content-lg-center nav ${togle ? 'nav2' : ''}` }>
   <i class="fa-solid fa-xmark d-lg-none" onClick={()=>togglenav()}></i>
     <div className='position-relative px-4 innernav1 '><NavLink className="text-decoration-none text-white"> HOME <i class="fa-solid fa-chevron-down"></i> </NavLink>
         <div className='innernav2 bg-white text-dark d-flex flex-column px-4 gap-2 py-2'>
           <Link className="text-decoration-none text-dark" >Home-1</Link>
           <Link className="text-decoration-none text-dark">Home-2</Link>
           <Link className="text-decoration-none text-dark">Home-3</Link>
           <Link className="text-decoration-none text-dark">Home-4</Link>
           <Link className="text-decoration-none text-dark">Home-5</Link>
         </div>
     
     </div>

     <div className='position-relative px-4 innernav1  '><NavLink className="text-decoration-none text-white">ACCOMMODATION<i class="fa-solid fa-chevron-down"></i> </NavLink>
         <div className='innernav2 bg-white text-dark d-flex flex-column px-4 gap-2 py-2'>
           <Link className="text-decoration-none text-dark">ACCOMMODATION LISTING</Link>
           <Link className="text-decoration-none text-dark">ACCOMMODATION DETAIL</Link>
          
         </div>
     
     </div>
     <div className='position-relative px-4 innernav1 '><NavLink className="text-decoration-none text-white">DESTINATION<i class="fa-solid fa-chevron-down"></i> </NavLink>
         <div className='innernav2 bg-white text-dark d-flex flex-column px-4 gap-2 py-2'>
           <Link className="text-decoration-none text-dark">DESTINATION LISTING</Link>
           <Link className="text-decoration-none text-dark">DESTINATION DETAIL</Link>
           <Link className="text-decoration-none text-dark">DESTINATION DETAIL-2</Link>
         </div>
     
     </div>

     <div className='position-relative px-4 innernav1 '><NavLink className="text-decoration-none text-white">SHOP<i class="fa-solid fa-chevron-down"></i> </NavLink>
         <div className='innernav2 bg-white text-dark d-flex flex-column px-4 gap-2 py-2'>
           <Link className="text-decoration-none text-dark">SHOP LISTING </Link>
           <Link className="text-decoration-none text-dark">SHOP DETAIL</Link>
           
         </div>
     
     </div>

     <div className='position-relative px-4 innernav1 '><NavLink to="/blog" className="text-decoration-none text-white">NEWS<i class="fa-solid fa-chevron-down"></i> </NavLink>
         <div className='innernav2 bg-white text-dark d-flex flex-column px-4 gap-2 py-2'>
           <Link className="text-decoration-none text-dark">NEWS</Link>
           <Link className="text-decoration-none text-dark">NEWS DETAIL</Link>
           
         </div>
     
     </div>

   </nav>


   
 
 
 



<div className="d-flex gap-4  ">
<i className="fa-solid fa-bars d-lg-none  c-white hov " onClick={()=>togglenav()}></i>
<i className="fa-solid fa-magnifying-glass c-white text-decoration-none hov d-none d-md-block"></i>
<Link to="/" class="fa-regular fa-user c-white text-decoration-none hov d-none d-md-block"></Link>
<Link to="/" class="fa-solid fa-cart-shopping c-white text-decoration-none hov d-none d-md-block"></Link>
</div>

   </div>
   
  )
}

export default NavBar