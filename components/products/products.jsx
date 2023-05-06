import React from 'react'

import hp15 from '../../images/lap3.png'
import camera from '../../images/cctvindoorcamera1.png'
import printer from '../../images/C-L-P.png'
import projector from '../../images/projector.png'
import fingerprint from '../../images/biometric-access-control-system.png' 
import xraymachine from '../../images/x-ray-conveyor-machine.jpg'
import walkthrough from '../../images/walkthrough.png'
import handheld from '../../images/handheld.png'
import mirror from '../../images/umirror.png'


const product_card =[
    {
        id : 1,
        product_name: 'Hp spectre sleeve 16',
        describtion: 'A laptop that makes it easy to get work done',
        price: 800000,
        currency: 'RWF',
        thumb: hp15
    },
    {
        id : 2,
        product_name: 'Security camera',
        describtion: 'A laptop that makes it easy to get work done',
        price: 50000,
        currency: 'RWF',
        thumb: camera
    },
    {
        id : 3,
        product_name: 'Color laserjet printer',
        describtion: 'A laptop that makes it easy to get work done',
        price: 25000,
        currency: 'RWF',
        thumb: printer
    },

     {
        id : 4,
        product_name: 'Projector',
        describtion: 'A laptop that makes it easy to get work done',
        price: 1000,
        currency: 'RWF',
        thumb: projector
    },
    {
        id : 5,
        product_name: 'biometric access control system',
        describtion: 'A laptop that makes it easy to get work done',
        price: 1000,
        currency: 'RWF',
        thumb: fingerprint
    },

      {
        id : 6,
        product_name: 'x ray conveyor machine',
        describtion: 'A laptop that makes it easy to get work done',
        price: 12000000,
        currency: 'RWF',
        thumb: xraymachine
    },
    {
      id : 7,
      product_name: 'Walk through',
      describtion: 'A laptop that makes it easy to get work done',
      price: 1500000,
      currency: 'RWF',
      thumb: walkthrough
  },
  {
    id : 8,
    product_name: 'Hand held',
    describtion: 'A laptop that makes it easy to get work done',
    price: 60000,
    currency: 'RWF',
    thumb: handheld
}
,
    {
      id : 9,
      product_name: 'Undervehicle search mirror',
      describtion: 'A laptop that makes it easy to get work done',
      price: 50000,
      currency: 'RWF',
      thumb: mirror
  }
]

const products = () => {
  return (
    <div className='card_container'>
        {
            product_card.map(({id,product_name,describtion,price,currency,thumb}) =>{
                return(
                    <div key={id} className='prod_card'>
                      <div className='card_img'>
                        <img src={thumb} className='prod_img'/>
                      </div>
                      <div className="card_header">
                        <h2>{product_name}</h2>
                        <p>{describtion}</p>
                        <button className='btn2'>More info</button>
                      </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default products