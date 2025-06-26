import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null)

//Creating one empty cart
const getDefaultCart = () => {
    let cart = {} //This is empty obj
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    // all_products.forEach(product => {
    //     cart[product.id] = 0;            //Example code
    // });
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_products, setAll_Product] = useState([]);
    const [cartItems, setCartItem] = useState(getDefaultCart()); //Store cart item in state

    // useEffect(() => {
    //     fetch('http://localhost:4000/allproducts')
    //     .then((res) => res.json())
    //     .then((data) => setAll_Product(data))
    // },[])
    //Fetching API from Back End for Products
    useEffect(() => {
        const fetchAllProducts = async () => {
            const response = await axios.get('http://localhost:4000/allproducts');
            setAll_Product(response.data);
        };
        fetchAllProducts();
        // if (localStorage.getItem('auth-token')) {
        //     fetch('http://localhost:4000/getcart',{
        //         method:'POST',
        //         headers:{
        //             Accept:'application/form-data',
        //             'auth-token':`${localStorage.getItem('auth-token')}`,
        //             'Content-Type':'application/json'
        //         },
        //         body:"",
        //     })
        //     .then((res) => res.json())
        //     .then((data) => setCartItem(data)
        //     )
        // }
        const fetchCart = async () => {
            const token = localStorage.getItem('auth-token');

            if (token) {
                    const response = await axios.post(
                        'http://localhost:4000/getcart',
                        {}, // Empty body instead of empty string
                        {
                            headers: {
                                Accept: 'application/form-data',
                                'Content-Type': 'application/json',
                                'auth-token': token,
                            },
                        }
                    );
                    setCartItem(response.data);
            }
        };
        fetchCart();
    }, []);

    //Add to cart 
    const addToCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        // console.log("addtocart", cartItems);
        // if (localStorage.getItem('auth-token')) {
        //     fetch('http://localhost:4000/addtocart',{
        //         method:'POST',
        //         headers:{
        //             Accept:'application/form-data',
        //             'auth-token':`${localStorage.getItem('auth-token')}`,
        //             'Content-Type':'application/json'
        //         },
        //         body:JSON.stringify({"itemId":itemId}),
        //     })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data)
        //     )
        // }
        const token = localStorage.getItem('auth-token');
        if (token) {
            const response = await axios.post(
                'http://localhost:4000/addtocart',
                { itemId },
                {
                    headers: {
                        Accept: 'application/form-data',
                        'auth-token': token,
                        'Content-Type': 'application/json'
                    },
                }
            );
            console.log(response.data);
        }
    }
    //Remove from cart
    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        const token = localStorage.getItem('auth-token');
        if (token) {
            const response = await axios.post(
                'http://localhost:4000/removefromcart',
                { itemId },
                {
                    headers: {
                        Accept: 'application/form-data',
                        'auth-token': token,
                        'Content-Type': 'application/json'
                    },
                }
            );
            console.log(response.data);
        }
    }
    // Total Cart item Amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }
    //Showing cart items in cart icon
    const getTotalCartItem = () => {
        let totalCartItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCartItem += cartItems[item];
            }
        }
        return totalCartItem;
    }

    //Sending data to other component via useContext
    const contextValue = { all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItem };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;