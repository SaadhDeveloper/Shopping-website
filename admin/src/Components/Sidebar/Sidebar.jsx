import React from 'react'
import '../Sidebar/Sidebar.css'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import add_product_icon from '../../Assets/Product_Cart.svg'
import list_product_icon from '../../Assets/Product_list_icon.svg'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                    <div className="sidebar-item">
                        <Image src={add_product_icon} alt=''/>
                        <p>Add Product</p>
                    </div>
                </Link>
                <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                    <div className="sidebar-item">
                        <Image src={list_product_icon} alt=''/>
                        <p>Product List</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Sidebar
