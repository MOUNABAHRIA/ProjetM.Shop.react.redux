
import './App.css';
import{Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import ContactUs from './pages/contact/ContactUs';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Login from './pages/auth/Login';
import Reset from './pages/auth/Reset';
import Register from './pages/auth/Register';
import ProductDetails from './pages/productDetails/ProductDetails';
import Shop from '../src/pages/shop/Shop';
import Carts from './pages/carts/Carts'
import products from './data/products';
import { useState } from 'react';
import Checkout from './pages/checkout/Checkout';






function App() {
  const[item,setItem]=useState(products);
  return (
   
      <div className='App'>
    <Header/>
    <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/shop" element={<Shop/>}/>
     <Route exact path="/contact" element={<ContactUs/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/register" element={<Register/>}/>
     <Route exact path="/reset" element={<Reset/>}/>
     <Route exact path="/productDetails/:id" element={<ProductDetails item={item} />}/>
     <Route exact path="/carts" element={<Carts/>}/>
     <Route exact path="/checkout" element={<Checkout/>}/>
    </Routes>
    <Footer/>
   
    </div>
   
  );
}

export default App;
