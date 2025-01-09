import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecipeList.css';  // Import the normal CSS file

const RecipeList = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  // Fetch recipes whenever the search query changes
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const url = searchQuery
          ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`  // Corrected template literal
          : 'https://www.themealdb.com/api/json/v1/1/search.php?s='; // Default fetch URL
        const response = await fetch(url);
        const data = await response.json();

        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setError('No recipes found');
        }
      } catch (err) {
        setError('Error fetching recipes');
      }
    };

    fetchRecipes();
  }, [searchQuery]);

  // If there's an error fetching recipes, display the error message
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal} 
            className="recipe-image" 
          />
          <h3 className="recipe-titles">{recipe.strMeal}</h3>
          <p className="recipe-category">{recipe.strCategory} - {recipe.strArea}</p>
          <Link to={`/recipe/${recipe.idMeal}`}> {/* Corrected Link */}
            <button className="view-details-btn">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
