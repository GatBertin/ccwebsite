import React,{useEffect} from 'react'

//images of products
import prod1 from '../../images/cam1.png'
import logo from '../../images/logo.png'
import prod2 from '../../images/acer1.png'
import prod3 from '../../images/projector.png'
import prod4 from '../../images/printer.png'
import prod5 from '../../images/router.png'
import prod6 from '../../images/walkthrough.png'
import prod7 from '../../images/handheld.png'
import prod8 from '../../images/catt611.png'

//import AOS ==============>
import Aos from 'aos'

//we are going to use high order array method called Map to display all the data ===>

const travelers =  [
  {
    id: 1,
    destinationImage: prod1,
    travelerImage: logo 
  },
  {
    id: 2,
    destinationImage: prod2,
    travelerImage: logo 
  },
  {
    id: 3,
    destinationImage: prod3,
    travelerImage: logo 
  },
  {
    id: 4,
    destinationImage: prod4,
    travelerImage: logo 
  },
  {
    id: 5,
    destinationImage: prod5,
    travelerImage: logo 
  },
  {
    id: 6,
    destinationImage: prod6,
    travelerImage: logo 
  },
  {
    id: 7,
    destinationImage: prod7,
    travelerImage: logo 
  },
  {
    id: 8,
    destinationImage: prod8,
    travelerImage: logo 
  }
]


const Traveller = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos ='fade-down' data-aos-duration='2500'>Best selling products this month!</h2>
              
            <div className="travelersContainer grid">
                
              {   
                travelers.map(({id,destinationImage,travelerImage})=>{
                  return(
                      <div data-aos ='fade-up' data-aos-duration='2500' key={id} 
                           className="singleTraveler">
                       <img src = {destinationImage} className='destinationImage'/>
                      
                        <div className="travelerDetails">
                          <div className="travelerPicture">
                            <img src={travelerImage} className='travelerImage' /> 
                          </div>
                        </div>
                        </div>
                  )
                })  
              }
        
             </div>
        
      </div>
      </div>
  )
}

export default Traveller