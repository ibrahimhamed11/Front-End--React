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
            <p>نفدم لكِ خدمات لمتابعة صحة و نمو طفلك, تابعينا و إنضمي إلينا و إضمني صحة طقلك</p>
            <NavLink to='register' className='btn' >سجلي معنا</NavLink>
          </div>
      </section>
    </>
  )
}
