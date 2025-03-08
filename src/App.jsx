import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import AppDownload from './components/AppDownload/AppDownload';
import LoginPopup from './components/LoginPopup/LoginPopup';
const App = () => {

  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>: <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      < Routes>
      < Route path='/' element={<Home/>}></Route>
      < Route path='/Cart' element={<Cart/>}></Route>
      < Route path='/Order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
   
    <Footer></Footer>
    </>
  );
}

export default App