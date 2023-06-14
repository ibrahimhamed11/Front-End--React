import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function ProductDetails() {
    const { productId } = useParams();
    const [oneproduct, setOneproduct] = useState();
    const getSingleProduct = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/products/${productId}`
          );
          setOneproduct(data);
          console.log(oneproduct);
        } catch {
          console.log("error ");
        }
      };
      useEffect(()=>{
        getSingleProduct();
      },[]);
  return (
    <div>
     
        <h1>All data for product </h1>
        <h2>name:{oneproduct?.title}</h2>
        <h3>price:{oneproduct?.price}</h3>
        <h4>category:{oneproduct?.category}</h4>
        <img src={oneproduct?.image}/>
    </div>
  )
}

export default ProductDetails