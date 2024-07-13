import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import trictMod  from "../../public/strock.svg"
import Home_imgsection from '../components/Home_imgsection'


const Home = () => {
  return (
  <div className='container-fluid  p-0 m-0 bg-dark'> 
  <div className='position-absolute  w-100 top-0'><Header />
<NavBar /></div>
<Home_imgsection />
  </div>
  )
}

export default Home