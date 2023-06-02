import React, { useState } from 'react';
import ProductImage from '../../images/product-image/Newborn-baby-sleeping.jpg';
import './card.css'
// import '../../../node_modules/font-awesome/css/fontawsome.min.css';

function Card(props) {
      const {product}=props;
  return (

    <div className="product-info">
        <img src={product.image} alt="Product-Image"/>
        <h2>{product.title}</h2>
        {/* <h5>{product.description}</h5> */}
        <p>{product.price}</p>
            <button>أطلب الأن</button>
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