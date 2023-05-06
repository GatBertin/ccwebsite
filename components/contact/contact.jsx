import React from 'react'

import contactbg from '../../images/contact-background.jpg'
import {FiPhoneCall} from 'react-icons/fi'
import {HiLocationMarker} from 'react-icons/hi'
import {GoMail} from 'react-icons/go'

const contact = () => {
  return (
    <div>
      <div className='contact_heading'>
        <h3>Contact us</h3>
        <p>Use our contact form of all Information request or contact us directly using the contact information below</p>
      </div>
      <div className='contact_bd'>
        <div className='iconDiv'>
          <GoMail  className='icon'/>
          <h3>MAIL US</h3>
       
        
        <p>patrango@connectcomputers.rw
             info@connectcomputers.rw</p>
             </div>
        <div className='iconDiv'>
          <HiLocationMarker  className='icon'/>
          <h3>LOCATION</h3>
          
         
      
        <p>Kigali, Rwanda , La bonne addresse 1st floor, 2KN round about </p>  
        </div>
        <div className=' iconDiv'>
          <FiPhoneCall  className='icon'/>
        <h3>CALL TODAY</h3>  
        
        <p>Tel: +250788322255</p>
        </div>
      </div>
    </div>
  )
}

export default contact


