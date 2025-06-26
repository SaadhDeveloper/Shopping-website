import React, { useContext } from 'react'
import { Image } from 'react-bootstrap'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext)
  return (
    <>
      <div className="shop-category">
        <Image className='shopcategory-banner' width={'90%'} height={'300px'} src={props.banner} alt='banner-mens' />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <Image src={dropdown_icon} alt='img-sort' />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_products.map((item, index) => {
            if (props.category === item.category) {
              return <Item key={index} id={item.id}
                name={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </>
  )
}

export default ShopCategory
