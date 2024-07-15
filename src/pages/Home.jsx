import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

import Home_imgsection from '../components/Home_imgsection'
import Elementorysec from '../components/Elementorysec'
import Elemontrysec2 from '../components/Elemontrysec2'
import Elemontrysec3 from '../components/Elemontrysec3'
import Elementorysec4 from '../components/Elementorysec4'


const Home = () => {
  return (
  <div className='container-fluid  p-0 m-0'> 
  <div className='position-absolute  w-100 top-0'><Header />
<NavBar /></div>
<Home_imgsection />
<Elementorysec />
<Elemontrysec2 />
<Elemontrysec3 />
<Elementorysec4 />
  </div>
  )
}

export default Home