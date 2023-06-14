import React from "react";
import "./profile.css";
import AddProduct from "../Components/AddProduct/AddProduct";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector(state => state.UserSlice.user)
  return (
    <>
      <div className="Profile">
        <div className="container">
          <div className="profile-title"></div>
          <div className="row">
            <div className="col-lg-3 ">
              <div className="card mb-4 ">
                <div className="card-body text-center shadow  bg-white rounded">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 100 }}
                  />
                  <h5 className="my-3">{user.name}</h5>
                  <p className="text-muted mb-4">{}</p>
                  <div className="d-flex flex-column gap-2">
                    <NavLink to="/profile/info" className=' btn btn-primary'>معلوماتي </NavLink>
                    <NavLink to="/profile/edit" className=' btn btn-primary'>تعديل البيانات </NavLink>
                    {user.role==='seller'?<><NavLink to="/profile/products" className=' btn btn-primary'>منتجاتي </NavLink>
                    <AddProduct/></>:""}
                    
                 </div>

                  <div className="d-flex justify-content-center mb-2"></div>
                </div>
              </div>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
