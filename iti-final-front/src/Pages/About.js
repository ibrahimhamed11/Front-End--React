import React from 'react';
import AboutImage from  '../images/main/a-mom-and-dad-parent-kissing-their-young-baby-1024x684.jpg';
import './about.css';


export default function About() {
  return (
    
    <div className="container">
        <div className='about-content'>
          <div className='about-top'>
            <p>نقدم لكِ خدمات لمتابعة صحة و نمو طفلك.تابعينا و إنضمي إلينا و إضمني صحة طفلك.نقدم لكِ خدمات لمتابعة صحة و نمو طفلك.تابعينا و إنضمي إلينا و إضمني صحة طفلك.نقدم لكِ خدمات لمتابعة صحة و نمو طفلك.تابعينا و إنضمي إلينا و إضمني صحة طفلك.</p>
            <img src={AboutImage}/>
          </div>
          <div className='about-bottom'>
          <img src={AboutImage}/>
          <p>نقدم لكِ خدمات لمتابعة صحة و نمو طفلك.تابعينا و إنضمي إلينا و إضمني صحة طفلك.نقدم لكِ خدمات لمتابعة صحة و نمو طفلك.تابعينا و إنضمي إلينا و إضمني صحة طفلك.نقدم لكِ خدمات لمتابعة صحة و نمو طفلك.تابعينا و إنضمي إلينا و إضمني صحة طفلك.</p>
          </div>
        </div>
    </div>
  )
}
