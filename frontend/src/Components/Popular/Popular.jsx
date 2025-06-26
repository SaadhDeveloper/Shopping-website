import React from 'react'
import '../Popular/Popular.css'
import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Popular = () => {
    const [popularProduct,setPopularProduct] = useState([]);
    useEffect(() => {
        const fetchPopularWomen = async() => {
            const response = await axios.get('http://localhost:4000/popularinwomen');
            setPopularProduct(response.data);
        }
        fetchPopularWomen();
    },[])
    return (
        <>
            <div className="popular">
                <h1>POPULAR IN WOMEN</h1>
                <hr />
                <div className="popular-item">
                    {popularProduct.map((item, index) => {
                        return <Item key={index} id={item.id}
                            name={item.name} image={item.image}
                            new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Popular
