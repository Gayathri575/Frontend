import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-overlay"></div> 
      <div className="header-content">
        <h1>Jalapeño</h1>
        <h2>Order Now</h2>
        <p>Order with the right calories. Discover new Recipes!</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
