import React from 'react'
import './blogDetails.css'
import userImage from '../images/profile-image/user_image.webp'
import { useSelector } from 'react-redux'


export default function BlogDetails() {
  const {oneBlog} = useSelector(state => state.BlogSlice);
  console.log(oneBlog)
  const api = "http://localhost:4000/"

  return (
        <div className='container'>
        
        <div className="comment-container">
           <div className="single-comment">
             <h4 className="comment-title">
               {oneBlog.title}
             </h4>
             <img src={`${api}${oneBlog.image}`} alt='blog'/> 
             <div className="comment-body">
               <div className="comment-body_head">
                 <img src={userImage} alt="user_image" />
                 <span>
                   <span className="username"> Ahmed Gad </span>
                   <span className="date"> june 17,2023 AT 1:28Am </span>
                 </span>
               </div>
               <div className="comment-body_text">
                 <p>
                {oneBlog.content}
                 </p>
               </div>
             </div>
           </div>
         </div>
        </div>
  )
}
