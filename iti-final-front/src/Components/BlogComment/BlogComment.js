import React from 'react'
import './blogComment.css'

export default function BlogComment() {



  return (
   <>
   <div className="comment-container">
      <div className="single-comment">
        <h4 className="comment-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
          molestias saepe cumque cupiditate sequi eius.
        </h4>
        <div className="comment-body">
          <div className="comment-body_head">
            <img src="user_318-159711.webp" alt="user_image" />
            <span>
              <span className="username"> Ahmed Gad </span>
              <span className="date"> june 17,2023 AT 1:28Am </span>
            </span>
          </div>
          <div className="comment-body_text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              nisi laudantium tenetur iusto inventore voluptatem sunt nesciunt
              rem! Quae, praesentium.
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
