import React,{useEffect} from 'react'

import {BsFillCartFill} from 'react-icons/bs'
import {RxCalendar} from 'react-icons/rx'
import {BsBookmarkCheck} from 'react-icons/bs'

//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
    //useEffect to set animation duration ==>
  
    useEffect(() =>{
      Aos.init({duration:2000})
    },[])
  
  return (
<div className="info section">
<div className="infoContainer container">

  <div className="titleDiv flex">
    <h2 data-aos ='fade-right' data-aos-duration='2500'>We have the best Ict essentials</h2>
    <button data-aos ='fade-left' data-aos-duration='2500' className='btn'>View All</button>
  </div>
  <div className="cardsDiv grid">
    <div data-aos ='fade-up' data-aos-duration='2500' className="singleCard grid">
      <div className="iconDiv flex">
       <BsFillCartFill className='icon'/>
        </div> 
        <span className='cardTitle'>Shop</span>
                <p>
                   Computers
                   Electronics
                   Projectors
                   Surveillance equipment
                   And more
                      
                </p>
                 
                     
    </div>
    <div data-aos ='fade-up' data-aos-duration='3500' className="singleCard grid">
      <div className="iconDiv flex colorOne">
        <RxCalendar className='icon'/>
        </div> 
        <span className='cardTitle'>Rent</span>
        <p> computers  
          Tablets
          Security Scanners
          and More
        </p>
     
    </div>
    <div data-aos ='fade-up' data-aos-duration='4500' className="singleCard grid">
      <div className="iconDiv flex colorTwo">
        <BsBookmarkCheck className='icon'/>
        </div> 
        <span className='cardTitle'>Services</span>
                   <p>
                      Computer networks
                      CCTV Cameras
                      Surveillance equipment
                      and more
                   </p>
                    
    </div>
  </div>
</div>
</div> 
  )
}

export default Info