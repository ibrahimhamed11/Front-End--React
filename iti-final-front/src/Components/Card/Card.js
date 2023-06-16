import React, { useState } from "react";
import ProductImage from "../../images/product-image/Newborn-baby-sleeping.jpg";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductById } from "../../Redux/Slices/ProductSlice";
import { NavLink } from "react-router-dom";

function Card(props) {
  const { product } = props;
  const { _id } = useSelector((state) => state.UserSlice.user)||"";
  const dispatch = useDispatch();
  const item = product;

  function handleAddToCart() {
    const quantity = 1;
    const product = item._id;
    const user = _id;
    dispatch(addToCart({ quantity, product, user }));
  }

  return (
    <div className="product-info">
      <NavLink
        to={`/${product._id}`}
        className="nav-link"
        onClick={() => {
          dispatch(getProductById(product._id));
        }}
      >
        <img src={product.image} alt="Product-img" />
        <p className="title">{product.title}</p>
        <p className="description">{product.description}</p>
        <p>EGP {product.price}</p>
      </NavLink>
      <button type="button" onClick={handleAddToCart}>
        اضف الى العربة
      </button>
    </div>
  );
}

export default Card;
/* <div className="rate">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div> */
