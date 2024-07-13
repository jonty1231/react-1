import React from 'react'
import {NavLink,Link} from "react-router-dom"

const Navlinks = () => {
  return (
    <div className='d-lg-flex   position-lg-static position-fixed top-0  text-lg-white text-dark bg-white right-1 gap-5 text-white w-10  navmove '>
    <div className='Main_link position-relative'>
        <NavLink to="/" className=" NavLink text-lg-white text-dark text-decoration-none">HOME <i className="fa-solid fa-chevron-down"></i></NavLink>
    <div className='bg-white position-absolute  flex-column  pe-3 gap-3 py-2'>
     <Link className='text-decoration-none text-dark'>HOME-1</Link>
     <Link className='text-decoration-none text-dark'>HOME-2</Link>
     <Link className='text-decoration-none text-dark'>HOME-3</Link>
     <Link className='text-decoration-none text-dark'>HOME-4</Link>
     <Link className='text-decoration-none text-dark'>HOME-5</Link>
     <Link className='text-decoration-none text-dark'>HOME-6</Link>
     </div>
    
    </div>
    <div className='Main_link position-relative'>
    <NavLink to="/" className="text-white text-decoration-none">ACCOMMODATION <i className="fa-solid fa-chevron-down"></i></NavLink>
    <div className='bg-white position-absolute  flex-column  pe-3 gap-3 py-2'>
     <Link className='text-decoration-none text-dark'>ACCOMMODATION LISTING</Link>
     <Link className='text-decoration-none text-dark'>ACCOMMODATION DETAIL</Link>
     
     </div>

    </div>

    <div className='Main_link position-relative'>
    <NavLink to="/" className="text-white text-decoration-none"> DESTINATION <i class="fa-solid fa-chevron-down"></i></NavLink>
    <div className='bg-white position-absolute  flex-column  pe-3 gap-3 py-2'>
     <Link className='text-decoration-none text-dark'>DESTINATION LISTING</Link>
     <Link className='text-decoration-none text-dark'>DESTINATION DETAIL</Link>
     <Link className='text-decoration-none text-dark'>DESTINATION DETAIL-2</Link>
     
     </div>

    </div>

   <div className='Main_link position-relative'><NavLink to="/" className="text-white text-decoration-none">SHOP <i class="fa-solid fa-chevron-down"></i></NavLink>
   <div className='bg-white position-absolute  flex-column  pe-3 gap-3 py-2'>
     <Link className='text-decoration-none text-dark'>SHOP LISTING</Link>
     <Link className='text-decoration-none text-dark'>SHOP DETAIL</Link>     
     </div>
   </div> 
   <div className='Main_link position-relative'>
    <NavLink to="/" className="text-white text-decoration-none">NEWS <i class="fa-solid fa-chevron-down"></i></NavLink>
    <div className='bg-white position-absolute  flex-column  pe-3 gap-3 py-2'>
     <Link className='text-decoration-none text-dark'>NEWS</Link>
     <Link className='text-decoration-none text-dark'>NEWS DETAIL</Link>     
     </div>
    </div>
    <NavLink to="/" className="text-white text-decoration-none"> PAGES <i class="fa-solid fa-chevron-down"></i>   </NavLink>
</div> 
  )
}

export default Navlinks