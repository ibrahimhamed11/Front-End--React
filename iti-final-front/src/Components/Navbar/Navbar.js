import { useRef, React } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/main/logo.png";
import { NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className="container-fluid">
      <div className="container">
        <NavLink className='logo'>
          <img src={Logo} alt="logo" />
        </NavLink>
        <nav ref={navRef}>
          <NavLink className="links">الرئيسية</NavLink>
          <NavLink className="links">تسوقي</NavLink>
          <NavLink className="links">عنا</NavLink>
          <NavLink className="links">المدونه</NavLink>
          <NavLink className="links register-btn">التسجيل</NavLink>
          <NavLink className="links login-btn"> دخول</NavLink>
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
