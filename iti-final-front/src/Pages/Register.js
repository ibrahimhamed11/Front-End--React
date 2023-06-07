import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: 0,
    password: "",
    address: "",
    age: 0,
    role: "",
  });

  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(user)

    try{
      let response = await axios.post("http://localhost:4000/user/register", { user });
      console.log(response);
    }catch(error) {
      console.log(error)
    }
  

    // if (response.status === 200) {
    //   setIsLoading(false);
    //   navigate('/login')
    // } else {
    //   setIsLoading(false);
    // }
  };
  return (
    <div className="container">
      <div className="form-container sign">
        <div className="sign-form">
          <h2>أنشاء حساب جديد</h2>
          <p>الرجاء أنشاء حساب حتي تتمكن من استخدام الموقع</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              nam
              onChange={getUserData}
              name="name"
              placeholder="الاسم بالكامل"
            />
            <br />
            <br />
            <input
              type="email"
              na
              onChange={getUserData}
              name="email"
              placeholder="أضف حسابك"
            />
            <br />
            <br />
            <input
              type="text"
              na
              onChange={getUserData}
              name="username"
              placeholder="ااسم مستخدم"
            />
            <br />
            <br />
            <input
              type="number"
              n
              onChange={getUserData}
              name="phone"
              placeholder="الهاتف"
            />
            <br />
            <br />
            <input
              type="password"
              onChange={getUserData}
              name="password"
              placeholder="كلمة المرور"
            />
            <br />
            <br />
            <input type="password" placeholder="تأكيد كلمة المرور" />
            <br />
            <br />
            <input
              type="text"
              nam
              onChange={getUserData}
              name="address"
              placeholder="ادخل عنوان صالح"
            />
            <br />
            <br />
            <input
              type="number"
              n
              onChange={getUserData}
              name="age"
              placeholder="ادخل عمرك"
            />
            <br />
            <br />
            <select className="role" name="role">
              <option value="mother">أم</option>
              <option value="pregnant">حامل</option>
              <option value="seller">تاجر</option>
            </select>
            <br />
            <br />
            <button className="btn-signin">
              {isLoading ? <FaSpinner /> : "إنشاء حساب"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
