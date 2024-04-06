import React from 'react';
import { BrowserRouter,Routes, Route , Navigate } from 'react-router-dom';
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



export default function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/product' element={<ProductList/>}/>
  <Route path="/product/:id" element={<SingleProduct/>} />
  <Route path='/Vaccine' element={<Vaccine/>}/>
  <Route path='/SOS' element={<Sos/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>

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
