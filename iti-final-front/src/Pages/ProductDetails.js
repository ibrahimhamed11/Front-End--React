import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./productDetails.css";
import ThumbImg from "../images/product-image/Newborn-baby-sleeping.jpg";
import { addToCart } from "../Redux/Slices/ProductSlice";



function ProductDetails() {
  const  item  = useSelector((state) => state.ProductSlice.product);
  const image = [ThumbImg, item.image, ThumbImg, item.image];
  const thumbRef = useRef();
  const [mainImage, setMainImage] = useState(item.image);
  const dispatch = useDispatch();
  const {_id} = useSelector(state => state.UserSlice.user)


  function handleImage(index) {
    setMainImage(image[index]);
    const images = thumbRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
    }
    images[index].classList.add("active");
  }

  function handleAddToCart() {
      const quantity = 1; 
      const product = item._id
      const user = _id;
      dispatch(addToCart({quantity,product,user}))

  }

  return (
    <div className="page-details">
      <div className="container">
        <div className="product_details">
          <div className="details">
            <div className="main-img">
              <img src={mainImage} alt="main-img" />
              <div className="thumb" ref={thumbRef}>
                {image.map((item, index) => {
                  return (
                    <img
                      src={item}
                      alt="main-img"
                      key={index}
                      onClick={() => {
                        handleImage(index);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="box">
              <div className="line">
                <h2>{item.title}</h2>
                <span>{item.price}</span>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <button className="btn btn-outline-primary btn-lg btn-block" onClick={handleAddToCart}>اضف الى العربة</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
