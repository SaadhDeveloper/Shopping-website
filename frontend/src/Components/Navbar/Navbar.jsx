import React, { useContext, useRef, useState } from 'react'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Button, Image } from 'react-bootstrap'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assests/nav_dropdown.png'
const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const { getTotalCartItem } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = () => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }
    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <Image src={logo} alt='nav_logo' width={"60px"} height={"80px"} />
                    <p>SHOPPER</p>
                </div>
                <Image className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='' />
                <ul ref={menuRef} className='nav-menu'>
                    <li onClick={() => { setMenu("shop") }}>
                        <Link to={"/"} style={{ textDecoration: 'none', color: '#515151' }} >HOME</Link>
                        {menu === "shop" ? <hr /> : <></>} </li>
                    <li onClick={() => { setMenu("mens") }}>
                        <Link to={"/mens"} style={{ textDecoration: 'none', color: '#515151' }}>MENS</Link>
                        {menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}>
                        <Link to={"/womens"} style={{ textDecoration: 'none', color: '#515151' }}>WOMENS</Link>
                        {menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}>
                        <Link to={"/kids"} style={{ textDecoration: 'none', color: '#515151' }}>KIDS</Link>
                        {menu === "kids" ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-cart">
                    {localStorage.getItem('auth-token')
                        ?
                        <Button className='login-btn' onClick={() => {
                            localStorage.removeItem('auth-token');
                            window.location.replace("/")
                        }}>Logout</Button>
                        :
                        <Link to={"/login"}><Button className='login-btn'>Login</Button></Link>
                    }


                    <Link to={"/cart"}><Image className='nav-count-img' src={cart_icon} alt='cart-icon' /></Link>
                    <div className="nav-cart-count">{getTotalCartItem()}</div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
