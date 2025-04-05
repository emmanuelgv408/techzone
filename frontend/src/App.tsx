
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";
import axios from "axios";
import "./index.css";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";

axios.defaults.baseURL = "techzone-backend-eklh.onrender.com";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="">
      <NavBar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:brand" element={<Category />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
