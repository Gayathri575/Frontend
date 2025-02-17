import React, { useState, useContext } from 'react';
import './FoodDisplay.css';
import { food_list } from '../../assets/assets';
import rating_starts from '../../assets/rating_starts.png'; 
import { StoreContext } from '../Context/StoreContext'; // Import StoreContext

const FoodDisplay = ({ category }) => {
  // Filter food items based on selected category
  const filteredItems = category === "All" 
    ? food_list 
    : food_list.filter(item => item.category === category);

  const FoodItem = ({ id, name, price, description, image, rating }) => {
    const [itemCount, setItemCount] = useState(0); // Local state for item count
    const { addToCart, removeFromCart } = useContext(StoreContext); // Use context for cart functions

    return (
      <div className="food-item">
        <img className="food-item-image" src={image} alt={name} />
  
        <div className="food-item-info">
          <p className="food-item-name">{name}</p>
          
          {/* Display Ratings */}
          <div className="food-item-rating">
            <img src={rating_starts} alt="Rating" className="rating-starts" />
            <span>{rating} / 5</span>
          </div>
          
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">₹{price}</p> 

          {/* Counter always visible */}
          <div className="food-item-counter">
            <button 
              onClick={() => {
                setItemCount(prev => Math.max(prev - 1, 0));
                if (itemCount > 0) removeFromCart(id); // Decrease count in global cart
              }}
              disabled={itemCount === 0}
            >-</button>
            <span>{itemCount}</span>
            <button onClick={() => {
              setItemCount(prev => prev + 1);
              addToCart(id); // Add to cart when item count is increased
            }}>+</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="food-display">
      <h2>{category} Dishes</h2>
      <div className="food-grid">
        {filteredItems.map((item) => (
          <FoodItem 
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;