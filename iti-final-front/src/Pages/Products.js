import React from 'react';
import Card from '../Components/Card/Card';
import './product.css';


function Products() {
  return (
    <div className ="container">
        <div className ="title">
            <h1>المتجر</h1>
        </div>
        <div className="search">
            <input type="text" placeholder = "ابحث عن المنتج الذي تريده"/>
           
        </div>
        <div className="product-contant">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Products