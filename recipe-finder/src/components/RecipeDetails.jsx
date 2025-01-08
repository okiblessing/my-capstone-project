import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // State to store recipe data
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const [error, setError] = useState(null); // State to store error message

  // Fetch the recipe details when the component mounts or the recipe ID changes
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();

        if (data.meals) {
          setRecipe(data.meals[0]); // Set the first recipe from the API response
        } else {
          setError('Recipe not found');
        }
      } catch (error) {
        setError('Failed to fetch recipe details');
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
    };

    fetchRecipeDetails();
  }, [id]); // Re-fetch if the recipe ID changes

  // If the data is still loading, display a loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  // If there's an error, display the error message
  if (error) {
    return <p>{error}</p>;
  }

  // If recipe data is available, render the recipe details
  return (
    <div className="recipe-container">
      {/* Back Button */}
      <div className="recipe-details-header">
        <button className="back-button" onClick={() => navigate('/recipes')}>Back </button>
        <h2 className="recipe-title">{recipe.strMeal}</h2>
      </div>

      {/* Recipe Image */}
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />

      {/* Ingredients List */}
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {Object.keys(recipe)
            .filter((key) => key.includes('strIngredient') && recipe[key]) // Filter only ingredients
            .map((key, index) => (
              <li className='ingredient' key={index}>{recipe[key]}</li>
            ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="instructions">
        <h3>Instructions:</h3>
        <p>{recipe.strInstructions}</p>
      </div>

      {/* Video URL if available */}
      {recipe.strYoutube && (
        <div className="video">
          <h3>Watch how to make it:</h3>
          <iframe
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Recipe Video"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
