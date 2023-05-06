import React,{useEffect} from 'react'
import logo from '../../images/logo.png'


import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa' 
import {AiFillYoutube} from 'react-icons/ai' 
//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {
   //useEffect to set animation duration ==>
  
   useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
     <div className="footer">
      <div className="sectionContainer container grid">
        <div data-aos ='fade-up' data-aos-duration='2500' className="gridOne">
          <div className="logoDiv">
            <img src={logo} className='logo'/>
            </div>
            <p>Best place to find ICT essential and their service provided</p>
            <div className="socialIcon flex">
                  <TiSocialFacebook className='icon'/> 
                  <AiOutlineTwitter className='icon'/>
                  <FaPinterestP className='icon'/>
                  <AiFillYoutube className='icon'/>
            </div>
        </div>
        <div data-aos ='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Information</span>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
          <li>
            <a href='#'>Offers</a>
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contacts</a>
          </li>
        </div>
        <div data-aos ='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Quick Guide</span>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>How to</a>
          </li>
          <li>
            <a href='#'>Features</a>
          </li>
          <li>
            <a href='#'>Our clients</a>
          </li>
          <li>
            <a href='#'>Location</a>
          </li>
          <li>
            <a href='#'>Contact us</a>
          </li>
        </div>
        <div data-aos ='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className='linkTitle'>Quick Guide</span>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>How to</a>
          </li>
          <li>
            <a href='#'>Features</a>
          </li>
          <li>
            <a href='#'>Our clients</a>
          </li>
          <li>
            <a href='#'>Location</a>
          </li>
          <li>
            <a href='#'>Contact us</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href='#'>Connect computer Devs</a></p>
      </div>
     </div>
  )
}

export default Footer