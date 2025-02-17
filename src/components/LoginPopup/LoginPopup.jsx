import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets'; 

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login'); 

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        {/* Popup Title with Close Button */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close Popup" 
            className="close-icon" 
          />
        </div>

        {/* Input Fields */}
        <div className="login-popup-inputs">
          {/* ✅ Fixed the `login` reference by using `currState` correctly */}
          {currState === 'Sign up' && <input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        {/* Submit Button */}
        <button type="submit">
          {currState === 'Sign up' ? 'Create Account' : 'Login'}
        </button>

        {/* Terms & Conditions Checkbox */}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I accept all the terms of use & privacy policy.</p>
        </div>

        {/* Toggle between Login & Signup */}
        <p>
          {currState === 'Login' ? 'Create a new account?' : 'Already have an account?'}  
          <span onClick={() => setCurrState(currState === 'Login' ? 'Sign up' : 'Login')}>
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
