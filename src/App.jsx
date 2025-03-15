import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Popup from './components/Popup/Popup'; // Import Popup Component
import RecipeBook from "./components/RecipeBook/RecipeBook";
import UserProfile from "./components/UserProfile/UserProfile";
import CaloriesTracker from "./components/CaloriesTracker/CaloriesTracker";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Check if the state changes in console
  console.log("Popup visibility:", showPopup);

  // Auto-show the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      console.log("Popup should be visible now!");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='app'>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {showPopup && <Popup message="Get free delivery On every order" onClose={() => setShowPopup(false)} />}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        <Route path="/recipe-book" element={<RecipeBook />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/caloriestracker' element={<CaloriesTracker />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
