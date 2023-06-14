import React, { useState } from 'react';
import ProductImage from '../../images/product-image/Newborn-baby-sleeping.jpg';
import './card.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Slices/ProductSlice';

// import '../../../node_modules/font-awesome/css/fontawsome.min.css';

function Card(props) {
      const {product}=props;
      // console.log(product)
      const dispatch = useDispatch();
  return (

    <div className="product-info">
        <img src={product.image} alt="Product-Image"/>
        <h2>{product.title}</h2>
        <h5>{product.description}</h5>
        <p>EGP {product.price}</p>
            <button type='button' onClick={()=> {
              dispatch(addToCart(product))
            }}>اضف الى العربة </button>
        <div className="rate">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        </div>
    </div>
  )
}

export default Card;