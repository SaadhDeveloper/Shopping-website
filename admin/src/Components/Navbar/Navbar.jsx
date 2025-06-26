import React from 'react'
import navlogo from '../../Assets/nav-logo.svg'
import navProfile from '../../Assets/nav-profile.svg'
import Image from 'react-bootstrap/Image'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Image src={navlogo} alt='navlogo' className='nav-logo'/>
        <Image src={navProfile} alt='nav-profile' className='nav-profile'/>
      </div>
    </>
  )
}

export default Navbar
