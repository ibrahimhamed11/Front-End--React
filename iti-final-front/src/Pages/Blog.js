import React, { useState } from 'react'
import BlogCards from '../Components/BlogCards/BlogCards';
import './blog.css';
import axios from 'axios';
import { useEffect } from 'react';
const pageSize = 12;

function Blog() {
  const [blogs,setBlogs]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);

  let noOfPages =  1 ;
  const getBlogs = async()=>{
    try{
      const {data}= await axios.get("https://jsonplaceholder.typicode.com/posts");
      setBlogs(data);
      console.log(blogs);
    }catch{
      console.log("error")
    }
  };

  const changeCurrentPage = (page)=>{
    setCurrentPage(page);
  };
  let itemsToRender = blogs;
  // paganation
  noOfPages = Math.ceil(itemsToRender.length/pageSize);
  const pages = Array(noOfPages).fill(0).map((item,i) => i+1);
  const start = currentPage * pageSize-pageSize;
  const end = start + pageSize;
  itemsToRender = itemsToRender.slice(start,end);

  useEffect(()=>{
    getBlogs();
  },[]);
  return (
    <div className="Blog">
        <div className="container">
            <div className="title-blog">
                <h1>مجتمعنا</h1>
            </div>
            <div className="blog-contant">
              <div className='card-info'>
              {
                  itemsToRender .map((blog)=>{
                    return <BlogCards blog ={blog} key={blog.id}/>
                  })
                }
              </div>
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
  )
}

export default Blog;