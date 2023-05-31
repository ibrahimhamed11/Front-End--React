import React from 'react';
import './login.css';

export default function login() {
  return (
    <div className="container">
  <div className="form-container">
    <div className="sign-greeting">
      <h2>مرحبا بعودتك</h2>
      
    </div>
    <div className="sign-form">
      <h2>تسجيل الدخول</h2>
      <p>الرجاء تسجيل الدخول حتى تتكمن من استخدام الموقع</p>
      <form>
        <input type="text" placeholder="اسم المستخدم" required />
        <br/>
        <br/>
        <input type="password" placeholder="كلمةالمرور" required/>
        <br/>
        <br/>
        <button className="btn-signin">تسجيل الدخول</button>
      </form>
    </div>
  </div>
</div>

  )
}
