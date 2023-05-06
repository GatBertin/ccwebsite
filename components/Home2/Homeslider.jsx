import React from 'react'

import computers from '../../images/lapie.jpg'
import printer from '../../images/printer.png'
import security from '../../images/x-ray-conveyor-machine.jpg'
import accessories from '../../images/computer_accessories.png'

const Homeslider = () => {
  return (
    <>
      <div className='slides_container'>
        <div className='slide1'>
            <h3>COMPUTERS</h3>
            <p>we jaffr these laptops</p>
            <img src='{computers}' className='slide_image'/>
        </div>
        <div className='slide2'>
            <h3>PRINTERS/PROJECTORS</h3>
            <p>we jaffr these laptops</p>
            <img src='{printer}' className='slide_image'/>
        </div>
        <div className='slide3'>
            <h3>SECURITY EQUIPMENT</h3>
            <p>we jaffr these laptops</p>
            <img src='{security}' className='slide_image'/>
        </div>
        <div className='slide4'>
            <h3>ACCESSORIES</h3>
            <p>we jaffr these laptops</p>
            <img src='{accessories}' className='slide_image'/>
        </div>

          </div>
    </>

  )
}

export default Homeslider