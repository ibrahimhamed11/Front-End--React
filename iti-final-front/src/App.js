import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Pages/Profile";
import ProfileInfo from "./Components/Profile/ProfileInfo";
import SellerProducts from "./Components/SellerProducts/SellerProducts";
// import { logIn } from "./Redux/Slices/UserSlice";
import EditInfo from "./Components/EditInfo/EditInfo";
import ShoppingCart from "./Pages/ShoppingCart";
import { getCartItems } from "./Redux/Slices/ProductSlice";
import { getUserData } from "./Redux/Slices/UserSlice";


function App() {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.ProductSlice.product);
  const userId = localStorage.getItem('id');
 

  useEffect(() => {
    dispatch(getUserData(userId));
    dispatch(getCartItems(userId))
  }, [dispatch, userId]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="home" element={<Main />} />
        <Route path="products" element={<Products />} />
        <Route path={_id} element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />}>
          <Route path="info" element={<ProfileInfo />} />
          <Route path="edit" element={<EditInfo />} />
          <Route path="products" element={<SellerProducts />} />
        </Route>
        <Route path="cart" element={<ShoppingCart />} />
        {/* <Route path="*"  element={<Navigate to="404" replace={true}/>}/> */}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
