import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling effect
    }
  };

  return (
    <div className="header">
      <div className="header-overlay"></div> 
      <div className="header-content">
        <h1>Jalapeño</h1>
        <h2>Feeling Cravings?? <br/> Explore Now</h2>
        <p>Your Jalapeño delivery app with a twist! <br/>
        Give back by redirecting cancelled orders to those in need.</p>

        {/* Button to scroll to Explore Menu */}
        <button className="menu-btn" onClick={scrollToMenu}>
          View Menu
        </button>
        
      </div>
    </div>
  );
};

export default Header;
