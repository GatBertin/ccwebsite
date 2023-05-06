import React, {useEffect} from 'react'

//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscriber = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='subscribe section'>
      <div className="sectionContainer container">
        <h2 data-aos ='fade-up' data-aos-duration='2500'>Subscribe Newsletter & get latest News</h2>
        <div h2 data-aos ='fade-up' data-aos-duration='2500' className="inputDiv flex">
          <input type='text' placeholder='Enter your email address'/> 
          
          <button className='btn'>Subscribe</button>
          </div> 
      </div>
    </div>
  )
}

export default Subscriber