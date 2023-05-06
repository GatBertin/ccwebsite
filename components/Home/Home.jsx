import React, {useEffect} from 'react'
 
//import Images and video =======>

import video1 from '../../Images/pexels-2.mp4'
import cam from '../../Images/ctv2.png'

//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  //useEffect to set animation duration ==>
  
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1 data-aos ='fade-up' data-aos-duration='2500'>Create ever lasting memory with us</h1>
      </div>
     <div data-aos ='fade-down' data-aos-duration='2500' className='homeImages flex'> 
       <div className="videoDiv">
         <video src={video1} autoPlay muted loop className='video'></video>
        </div> 
    {/* <img src={cam} className='laptop'/>*/}  
       
     </div>
    </div>
  )
}

export default Home

