import React from 'react'
import { Image } from 'react-bootstrap'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <Image src={footer_logo} alt='footer-logo'/>
          <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <Image src={instagram_icon} alt='instagram-icon' />
          </div>
          <div className="footer-icons-container">
            <Image src={pintester_icon} alt='instagram-icon' />
          </div><div className="footer-icons-container">
            <Image src={whatsapp_icon} alt='instagram-icon' />
          </div>
        </div>
        <div className="footer-copyrights">
          <hr />
          <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
