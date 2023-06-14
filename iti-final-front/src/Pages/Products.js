import React, { useState } from "react";
import Card from "../Components/Card/Card";
import "./product.css";
import axios, { Axios } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllProducts } from "../Redux/Slices/ProductSlice";

const pageSize = 12;

function Products() {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.ProductSlice);
  console.log(products)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  // // const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  let noOfPages = 1;

  // const getProducts = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:4000/products");
  //     // setProducts(data);
  //     console.log(products);
  //   } catch {
  //     console.log("error");
  //   }
  // };

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };
  let itemsToRender = products;
  // paganation
  noOfPages = Math.ceil(itemsToRender.length / pageSize);
  const pages = Array(noOfPages)
    .fill(0)
    .map((item, i) => i + 1);

  const start = currentPage * pageSize - pageSize;
  const end = start + pageSize;
  itemsToRender = itemsToRender.slice(start, end);



  return (
    <>
    <div className="container">
      <div className="title-product">
        <h1>المتجر</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="ابحث عن المنتج الذي تريده"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="product-contant">
        <div className="card-info">
          {itemsToRender
            .filter((product) => {
              return product.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((item,index) => {
              return <Card product={item} key={index} />;
            })}
        </div>
      </div>
      <div className="bar">
        {pages?.map((page) => (
          <button
            onClick={() => changeCurrentPage(page)}
            key={page}
            className={`btn ${currentPage === page ? "btn-active" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    </>
  );
}
export default Products;
