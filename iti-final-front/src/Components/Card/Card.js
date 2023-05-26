import React from 'react';
import ProductImage from '../../images/product-image/Newborn-baby-sleeping.jpg';
import './card.css'
// import '../../../node_modules/font-awesome/css/fontawsome.min.css';

function Card() {
  return (

    <div className="product-info">
        <img src={ProductImage} alt="Product-Image"/>
        <h2>سرير أطفال</h2>
        <h5>سرير أطفال مصنوع من القطن بنسبة 100% ، مضاد للحاسيسة وخفيف الوزن بمسامات للتهوية وغير سامة لن يتيغير أدائه بعد الغسيل المتكرر .</h5>
        <p>السعر : 100جنيه</p>
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