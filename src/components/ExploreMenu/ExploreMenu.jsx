import React, { useEffect } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory = () => {} }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at top
  }, []);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p>Choose from diverse menu options</p>

      <div className="explore-menu-list" id="explore-menu-list">
        {menu_list?.length > 0 ? (
          menu_list.map((item) => (
            <div 
              key={item.menu_name} 
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`} 
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            >
              <img 
                src={item.menu_image} 
                alt={`Delicious ${item.menu_name}`} 
                tabIndex="0"
              />
              <p>{item.menu_name}</p>
            </div>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
