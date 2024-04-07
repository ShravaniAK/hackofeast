import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Sos from './pages/Sos';
import Vaccine from './pages/Vaccine';
import ProductList from './pages/ProductList.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CartPage from './pages/Cart'; 

export default function App() {
  const user = localStorage.getItem("token");
  const [cart, setCart] = useState([]); // State to hold the cart items

  const handleAddToCart = (product) => {
    // Add product to cart state
    const existingCartItem = cart.find((item) => item._id === product._id);
    if (existingCartItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post(`https://hackofeast.onrender.com/cart`, cart);
      console.log('Cart posted successfully:', response.data);
      // You can add additional logic here, such as redirecting to a checkout page or displaying a success message
    } catch (error) {
      console.error('Error posting cart:', error);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct handleAddToCart={handleAddToCart} cart={cart} setCart={setCart} />} />
        <Route path='/Vaccine' element={<Vaccine />} />
        <Route path='/SOS' element={<Sos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/cart' element={<CartPage cart={cart} handleCheckout={handleCheckout} />} /> {/* Add the route for the cart page */}
        {!user && <Route path="/signup" element={<Signup />} />}
        {!user && <Route path="/login" element={<Login />} />}
        {user && (
          <>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/signup" element={<Navigate to="/" replace />} />
          </>
        )}
        {!user && <Route path="*" element={<Navigate to="/login" replace />} />}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}