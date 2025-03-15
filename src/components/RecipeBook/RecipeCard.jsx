import React from "react";
import "./RecipeBook.css";

const RecipeCard = ({ recipe, onViewDetails }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3 className="recipe-title">{recipe.name}</h3>
      <button className="view-details-btn" onClick={() => onViewDetails(recipe)}>
        View Details
      </button>
    </div>
  );
};

export default RecipeCard;
