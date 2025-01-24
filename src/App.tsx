import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";

import './index.css';

const App = () => {
  return (
    <div className="" >
      <NavBar /> 
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:brand" element={<Category />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>

      <Footer /> 
    </div>
  );
};

export default App;
