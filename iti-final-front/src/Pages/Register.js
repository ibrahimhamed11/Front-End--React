import React from 'react';
import './register.css';


export default function Register() {

  return (

    <div className='container'>
      <div className='form-container sign'>
        <div className='sign-form'>
          <h2>أنشاء حساب جديد</h2>
          <p>الرجاء أنشاء حساب حتي تتمكن من استخدام الموقع</p>
          <form>
            <input type='text' placeholder='الاسم بالكامل'/>
            <br/>
            <br/>
            <input type='email' placeholder='أضف حسابك'/>
            <br/>
            <br/>
            <input type='number' placeholder='الهاتف'/>
            <br/>
            <br/>
            <input type='password' placeholder='كلمة المرور'/>
            <br/>
            <br/>
            <input type='password' placeholder='تأكيد كلمة المرور'/>
            <br/>
            <br/>
            <select className='role' name='role'>
                <option value='mother'>أم</option>
                <option value='pregnant'>حامل</option>
                <option value='seller'>تاجر</option>
            </select>
            <br/>
            <br/>
            <button className="btn-signin">أنشاء حساب</button>
            
          </form>
        </div>
      </div>
    </div>
  )
}




