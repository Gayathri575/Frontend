import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import recipes from "./RecipeBookData";
import "./RecipeBook.css";

const RecipeBook = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  const filteredRecipes = recipes.filter(recipe =>
    (selectedCategory === "All" || recipe.category === selectedCategory) &&
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipe-book">
      <h2>📖 Recipe Book</h2>

      
      <input
        type="text"
        className="search-bar"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      
      <div className="category-filter">
        {["All", "Drinks", "Instant Food", "Soup", "Snacks"].map(category => (
          <button 
            key={category} 
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      
      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onViewDetails={setSelectedRecipe} 
            />
          ))
        ) : (
          <p className="no-results">No recipes found.</p>
        )}
      </div>

    
      {selectedRecipe && (
        <div className="recipe-modal">
          <div className="modal-content">
          <button className="close-btn" onClick={() => setSelectedRecipe(null)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
</button>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.name} className="modal-image" />
            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{selectedRecipe.instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeBook;
