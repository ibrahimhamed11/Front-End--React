import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Main from "./Pages/Main";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import ProductDetails from "./Pages/ProductDetails";
import { useDispatch } from "react-redux";
import Profile from "./Pages/Profile";
import ProfileInfo from "./Components/Profile/ProfileInfo";
import SellerProducts from "./Components/SellerProducts/SellerProducts";
import { logIn } from "./Redux/Slices/UserSlice";
import EditInfo from "./Components/EditInfo/EditInfo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logIn());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="home" element={<Main />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />}>
          <Route path="info" element={<ProfileInfo />} />
          <Route path="edit" element={<EditInfo />} />
          <Route path="products" element={<SellerProducts />} />
        </Route>
        <Route path="products/:productId" element={<ProductDetails />} />

        {/* <Route path="*"  element={<Navigate to="404" replace={true}/>}/> */}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
