import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import { Image } from 'react-bootstrap'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <>
            <div className="productDisplay">
                {/* Product Display in Left */}
                <div className="productDisplay-left">
                    <div className="productDisplay-img-list">
                        <Image src={product.image} alt='product-image' width={'90px'} height={'110px'} />
                        <Image src={product.image} alt='product-image' width={'90px'} height={'110px'} />
                        <Image src={product.image} alt='product-image' width={'90px'} height={'110px'} />
                        <Image src={product.image} alt='product-image' width={'90px'} height={'110px'} />
                    </div>
                    <div className="productDisplay-img">
                        <Image className='productDisplay-main-img' src={product.image} alt='product-image' />
                    </div>
                </div>


                <div className="productDisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productDisplay-right-star">
                        <Image src={star_icon} alt='product-image' />
                        <Image src={star_icon} alt='product-image' />
                        <Image src={star_icon} alt='product-image' />
                        <Image src={star_icon} alt='product-image' />
                        <Image src={star_dull_icon} alt='product-image' />
                        <p>(122)</p>
                    </div>
                    <div className="productDisplay-right-price">
                        <div className="productDisplay-right-price-old">
                            ${product.old_price}
                        </div><div className="productDisplay-right-price-new">
                            ${product.new_price}
                        </div>
                    </div>
                    <div className="productDisplay-right-descrition">
                        Experience the luxury of Italian craftsmanship with our premium silk blouse.
                        The soft, luxurious silk fabric drapes beautifully and feels incredible against the skin.
                    </div>
                    <div className="productDisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productDisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                    <Link to={'/cart'} onClick={() => { addToCart(product.id) }}><button>BUY NOW</button></Link>
                    <p className='productDisplay-right-category'> <span>Category : </span> {product.category} T-shirt, Crop Top </p>
                    <p className='productDisplay-right-category'> <span>Tags : </span> Modern, Latest </p>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay
