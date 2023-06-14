import { useRef, React } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/main/logo.png";
import { NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/Slices/UserSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.UserSlice.isLoggedIn);
  const user = useSelector((state) => state.UserSlice.user);
  console.log(user);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className="container-fluid">
      <div className="container">
        <NavLink to="home" className="logo">
          <img src={Logo} alt="logo" />
        </NavLink>
        <nav ref={navRef}>
          <NavLink to="home" className="links">
            الرئيسية
          </NavLink>
          {isLoggedIn ? (
            <NavLink to="profile/info" className="links">
              صفحتك
            </NavLink>
          ) : (
            ""
          )}
          {!user || user.role === "mother" ?(
           <> <NavLink to="products" className="links">
              تسوقي
            </NavLink>
            <NavLink to="blog" className="links">
            مجتمعنا
          </NavLink>
            </>
          )  : (
            ""
          )}

          <NavLink to="about" className="links">
            عنا
          </NavLink>
      
          <NavLink to="cart" className="links register-btn">
                عربة التسوق
              </NavLink>
          {isLoggedIn ? (
            <>
              <span className="profile"> {user.name}</span>
           
              <span onClick={() => dispatch(logOut())} className="logOut">
            
                Log out
              </span>
            </>
          ) : (
            <>
              <NavLink to="register" className="links register-btn">
                التسجيل
              </NavLink>
              <NavLink to="login" className="links login-btn">
                {" "}
                دخول
              </NavLink>
            </>
          )}

          <button className="nav-btn nav-btn-close" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
