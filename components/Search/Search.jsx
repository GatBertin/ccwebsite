import React,{useEffect} from 'react'
import {RiProductHuntLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineEnvironment} from 'react-icons/ai'
import {RiServiceLine } from 'react-icons/ri'

//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {
    //useEffect to set animation duration ==>
  
    useEffect(() =>{
      Aos.init({duration:2000})
    },[])
  
  return (
    <div className='search container section'>

      <div data-aos ='fade-up' data-aos-duration='2500' className="sectionContainer grid">

       <div className="btns flex">
        <div className="singleBtn">
         <span>Shop</span>
         </div>
         <div className="singleBtn">
         <span>Rent</span>
         </div>
         <div className="singleBtn">
         <span>Service</span>
         </div>
         
        
        </div>
        
        <div className="searchInputs flex">
           <div className="singleInput flex">
            <div className="iconDiv">
              <RiProductHuntLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Products</h4>
              <input type="text" placeholder='Search your Product'/>
            </div>
           </div>
           <div className="singleInput flex">
            <div className="iconDiv">
              <AiOutlinePhone className='icon'/>
            </div>
            <div className="texts">
              <h4>Contacts</h4>
              <input type="text" placeholder='want to contact us'/>
            </div>
           </div>
           <div className="singleInput flex">
            <div className="iconDiv">
              <AiOutlineEnvironment className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Our Location'/>
            </div>
           </div>
           <div className="singleInput flex">
            <div className="iconDiv">
              <RiServiceLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Services</h4>
              <input type="text" placeholder='Our Services'/>
            </div>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Search