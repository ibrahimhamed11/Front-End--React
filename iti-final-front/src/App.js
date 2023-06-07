
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Main from './Pages/Main';
import Products from "./Pages/Products";
import About from './Pages/About'
import Blog from './Pages/Blog';
import Register from './Pages/Register';
import Login from './Pages/login';
import ProfileInfo from "./Components/Profile/ProfileInfo";
import Footer from './Components/Footer/Footer'








function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Main/>}/>
        <Route path="products" element={<Products/>} />
        <Route path="about" element={<About/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        <Route path="profile" element={<ProfileInfo/>}/>
        <Route path="*"  element={<Navigate to="home" replace={true}/>}/>
      </Routes>
      <Footer/>
    
    
    </>

  );
}
export default App;
