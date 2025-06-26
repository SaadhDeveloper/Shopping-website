import React, { useState } from 'react'
import '../AddProduct/AddProduct.css'
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/esm/Image';
import upload_area from '../../Assets/upload_area.svg'
import Button from 'react-bootstrap/Button';

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        old_price: "",
        new_price: "",
        category: "women",
    })

    // Showing Upload Image
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }
    const Add_Product = async () => {
        console.log(productDetails);
        // Adding Product in Back End
        //First adding & Upload product image in Back End
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        })
            .then((resp) => resp.json())
            .then((data) => { responseData = data })

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            })
                .then((resp) => resp.json())
                .then((data) => {
                    data.success ? alert("Product Added") : alert("Failed")
                })
        }

    }


    return (
        <>
            <div className="add-product">
                <div className="addproduct-itemfield">
                    <p>Product Title</p>
                    <Form.Control
                        placeholder="Type here"
                        name='name'
                        aria-describedby="basic-addon1"
                        value={productDetails.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className="addproduct-price">
                    <div className="addproduct-itemfield">
                        <p>Price</p>
                        <Form.Control
                            placeholder="Type here"
                            name='old_price'
                            aria-describedby="basic-addon1"
                            value={productDetails.old_price}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="addproduct-itemfield">
                        <p>Offer Price</p>
                        <Form.Control
                            placeholder="Type here"
                            name='new_price'
                            aria-describedby="basic-addon1"
                            value={productDetails.new_price}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Category</p>
                    <Form.Select aria-label="Default select example" className='add-product-selector'
                        name='category'
                        value={productDetails.category}
                        onChange={changeHandler}>
                        <option>Select</option>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="kid">Kid</option>
                    </Form.Select>
                </div>
                <div className="addproduct-itemfield">
                    <Form.Label htmlFor='file-input'>
                        <Image src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' />
                    </Form.Label>
                    <Form.Control
                        type='file'
                        name='image'
                        id='file-input'
                        hidden
                        onChange={imageHandler}
                    />
                </div>
                <Button className='addproduct-button' onClick={() => { Add_Product() }}>ADD</Button>
            </div>
        </>
    )
}

export default AddProduct
