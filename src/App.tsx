import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';



function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        
        <Route path="/" element= {<HomePage/>} />
        <Route path ='/products/:productId' element= {<ProductDetail/>}/>
        <Route path ='/category/:category' element= {<CategoryPage/>}/>

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
