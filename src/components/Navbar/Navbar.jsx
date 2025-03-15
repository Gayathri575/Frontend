import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import jhead from "../../assets/jhead.png";
import { Search, ShoppingCart, User, Moon, Sun, Menu } from "lucide-react";
import { food_list } from "../../assets/assets"; 

const Navbar = ({ darkMode, setDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    if (query.trim() === "") {
      setFilteredItems([]);
    } else {
      const results = food_list.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
      setFilteredItems(results);
    }
  };

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      
      
      <Link to="/" className="logo">
        <img src={jhead} alt="Jalapeño" className="logo-img" />
      </Link>

    
      <div className="navbar-search">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-box"
          placeholder="Search food..."
          value={searchTerm}
          onChange={handleSearch}
        />

        
        {filteredItems.length > 0 && (
          <div className="search-results">
            {filteredItems.map(item => (
              <div key={item._id} className="search-item">
                <img src={item.image} alt={item.name} className="search-item-img" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      
      <div className="navbar-icons">
        <Link to="/cart"><ShoppingCart className="nav-icon" size={22} /></Link>
        <Link to="/profile"><User className="nav-icon" size={22} /></Link>

        
        <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        
        <div className="dropdown" ref={dropdownRef}>
          <button 
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(prev => !prev)}
          >
            <Menu size={24} />
          </button>

          
          <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
            <Link to="/recipe-book" className="dropdown-item">📖 Recipe Book</Link>
            <Link to="/caloriestracker" className="dropdown-item">🔥 Calories Tracker</Link>
            <Link to="/food-redistribution" className="dropdown-item">♻️ Food Redistribution</Link>
            <Link to="/contact-us" className="dropdown-item">📞 Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
