import React from 'react';
import "./AboutPage.css";
const AboutPage = () => {
  return (
    <div className="about-container">
      
      <div className="overlay"></div>
      
      
      <div className="about-content">
        
        
        <div className="column">
          <h2 className="section-heading">Introduction</h2>
          <p className="section-content">
            Recipe Finder is a web application designed to help users discover new and exciting recipes based on available ingredients.
            Whether you're a beginner or an experienced cook, this app makes it easy to find the perfect recipe for your next meal.
          </p>
        </div>

        
        <div className="column">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-content">
            To find a recipe, simply enter the name of the dish you have in hand, and let Recipe Finder do the rest.
            The app fetches data from TheMealDB API to show you recipes that match your search criteria, including ingredients, preparation steps, and even video tutorials.
          </p>
        </div>

       
        
      </div>
    </div>
  );
};

export default AboutPage;
