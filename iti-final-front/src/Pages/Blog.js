import React from 'react'
import BlogCards from '../Components/BlogCards/BlogCards';
import './blog.css'

function Blog() {
  return (
    <div className="Blog">
        <div className="container">
            <div className="title-blog">
                <h1>مجتماعنا</h1>
            </div>
            <div className="blog-contant">
                <BlogCards/>
                <BlogCards/>
                <BlogCards/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Blog