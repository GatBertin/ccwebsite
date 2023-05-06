import React, {useEffect} from 'react'
import lap3 from '../../images/x-ray-conveyor-machine.jpg'


//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'


const Lounge = () => {
   //useEffect to set animation duration ==>
  
   useEffect(() =>{
    Aos.init({duration:2000})
  },[])


  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos ='fade-down' data-aos-duration='2500'className="imgDiv">
          <img src={lap3}/>
        </div>
        <div className="textDiv">
          <h2 data-aos ='fade-down' data-aos-duration='2500'>Our Services</h2>
          <div className="grids grid">
          <div data-aos ='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className="gridTitle">
            CCTV Installation
            </span>
            <p>
            Remote monitored systems with audio talk back to identify intruders
           
            </p>
          </div>
          <div data-aos ='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className="gridTitle">
            Network Installation
            </span>
            <p>
            We manage and provide IT installation services including hardware, software and more
          
            </p>
          </div>
           
          <div data-aos ='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className="gridTitle">
            Detection Security Equipment Installation

            </span>
            <p>
            Security offers a full array
            of repair services, planned maintenance programs
            </p>
          </div>
          <div data-aos ='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className="gridTitle">
            Rental for Security Equipment and Computers

            </span>
            <p>
            We offer a full line of technology rental equipment
            </p>
          </div>
        </div>

       
        </div>
      </div>
    </div>  
  )
}

export default Lounge