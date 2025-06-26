import React from 'react'
import '../NewsLetter/NewsLetter.css';
import { Button } from 'react-bootstrap';

const NewsLetter = () => {
  return (
    <>
      <div className="newsletter">
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our NewsLetter and Stay Updated</p>
        <div>
            <input type="email" placeholder='Enter Your Email' />
            <Button variant="outline-secondary">Subscribe</Button>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
