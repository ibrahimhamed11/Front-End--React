import React from 'react';
import BlogImage from '../../images/blog-image/CA_pregnant_08182022istock.jpg';
import './blogCard.css'
function BlogCards() {
  return (
   <div className="blog-info">
    <img src={BlogImage} alt="Blog-Image"/>
        <h2>9 أطعمة مرطبة بشكل مدهش - وكيفية تقديمها للرضع والأطفال الصغار</h2>
        <p>مع ارتفاع درجات الحرارة ، أضف هذه الأطعمة الغنية بالمياه إلى طبق صغيرك.</p>
        <buuton><a href="#">أقرا المزيد</a></buuton>
    
   </div>
  )
}

export default BlogCards;