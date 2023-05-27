import React from 'react';
import './hero.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <section className='hero'>
          <div className='container'>
            <h1>أهلاً بكِ في موقعنا</h1>
            <p>نقدم لكِ خدمات لمتابعة صحة و نمو طفلك.
               <br className='newLine'/>تابعينا و إنضمي إلينا و إضمني صحة طفلك.</p>
            <NavLink to='register' className='btn' >سجلي معنا</NavLink>
          </div>
      </section>
    </>
  )
}
