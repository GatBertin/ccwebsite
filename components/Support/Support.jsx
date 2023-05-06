import React, {useEffect} from 'react'

//Imported images ====>
import lap5 from '../../images/e-commerce.webp'

//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
   //useEffect to set animation duration ==>
  
   useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
  
    <div className='support container section'>
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>Product support</small>
          <h2>Get our Support</h2>
          <p>We would like to know products that meet your interest.</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div data-aos ='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className='number '>01</span>
              <h4>Best place to find ICT essential</h4>
              <p>Security offers a full arrayof repair services, planned
                maintenance programs.</p>

            </div>
            <div data-aos ='fade-down' data-aos-duration='2500'className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Our services  </h4>
              <p>We manage and provide IT installation services including hardware, software and more
                Remote monitored systems. We offer a full line of technology rental equipment
              </p>
              
            </div>
            <div data-aos ='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Get to know our shop</h4>
              <p>Security offers a full arrayof repair services, planned
                maintenance programs. We manage and provide IT installation services inclusding hardware, software and more 
              </p>
              
            </div>
          </div>
          <div data-aos ='fade-up' data-aos-duration='2500' className="imgDiv">
             <img src={lap5} width= "100px" height= "100px" />
          </div>
        </div> 
      </div>

  </div> 
   
  )
}

export default Support