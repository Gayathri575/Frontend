import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
   
    <div className='app'>
       {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/PlaceOrder' element={<PlaceOrder/>}/> 
      </Routes>
      <Footer/>
    
      </div>
  )
}

export default App
