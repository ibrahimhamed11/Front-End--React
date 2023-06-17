import React from 'react';
import BlogImage from '../../images/blog-image/CA_pregnant_08182022istock.jpg';
import './blogCard.css'
function BlogCards(props) {
  const {blog}=props;
  return (
   <div className="blog-info">
    <img src={BlogImage} alt="Blog-Image"/>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <buuton className="btn btn-outline-primary ">أقرا المزيد</buuton>
   </div>
  )
}

export default BlogCards;