import React from 'react'
import '../BreadCrum/Breadcrum.css'
import { Image } from 'react-bootstrap'
import breadcrum_arrow from '../Assests/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <>
            <div className="breadcrum">
                HOME <Image src={breadcrum_arrow} alt='' />
                SHOP <Image src={breadcrum_arrow} alt='' />
                {product.category} <Image src={breadcrum_arrow} alt='' />
                {product.name}
            </div>
        </>
    )
}

export default Breadcrum
