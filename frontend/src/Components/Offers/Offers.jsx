import React from 'react'
import '../Offers/Offers.css';
import exclusive_image from '../Assests/exclusive_image.png'
import { Button, Image } from 'react-bootstrap';

const Offers = () => {
  return (
    <>
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <Button variant="outline-secondary" className='no-click-bg'>Click Now</Button>
      </div>

      <div className="offers-right">
        <Image src={exclusive_image} alt='exclusive-offers' />
      </div>
    </div>
    </>
  )
}

export default Offers
