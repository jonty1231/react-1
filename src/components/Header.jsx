import React from 'react'

const Header = () => {
  return (
    <div className=' w-100 headercls position-relative px-4 d-none d-md-flex justify-content-between align-items-center    py-3 border-bottom'>
   
<div className=' d-flex gap-3 text-white '  >
<p className="d-flex gap-2 hov "><i class="fa-solid fa-headphones-simple mt-1"></i><span >000-123-456789</span></p>
<p className="d-flex gap-2 hov "><i class="fa-solid fa-envelope-open-text mt-1"></i><span>support@example.com</span></p>
</div>
 
 <div className=' d-flex gap-3  text-white '>
 <i class="fa-brands fa-facebook mt-2 hov"></i>
 <i class="fa-brands fa-twitter mt-2 hov"></i>
 <i class="fa-brands fa-youtube mt-2 hov "></i>
 <button className='hoverbutton '>Book Now</button>
 </div>
    </div>

    
  )
}

export default Header