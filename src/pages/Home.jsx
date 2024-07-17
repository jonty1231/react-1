import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

import Home_imgsection from '../components/Home_imgsection'
import Elementorysec from '../components/Elementorysec'
import Elemontrysec2 from '../components/Elemontrysec2'
import Elemontrysec3 from '../components/Elemontrysec3'
import Elementorysec4 from '../components/Elementorysec4'
import Elementorysec5 from '../components/Elementorysec5'
import Elementorysec6 from '../components/Elementorysec6'
import Elementorysec7 from '../components/Elementorysec7'
import Elementorysec8 from '../components/Elementorysec8'
import Elementorysec9 from '../components/Elementorysec9'
import Elementorysec10 from '../components/Elementorysec10'
import Elementorysec11 from '../components/Elementorysec11'
import Footer from '../components/Footer'

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
<Elementorysec5 />
<Elementorysec6 />
<Elementorysec7 />
<Elementorysec8 />
<Elementorysec9 />
<Elementorysec10 />
<Elementorysec11 />
<Footer />
  </div>
  )
}

export default Home