import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./HeroSection.css"; // Import the CSS file

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGetStarted = () => {
    navigate("/recipes"); // Navigate to the recipes page when button is clicked
  };

  return (
    <div className="hero-section">
     
      <div className="background-image" alt="Delicious food on a plate"></div>

      
      <div className="overlay"></div>

      
      <div className="content">
        <h1>Cooking Experiences Like a Chef</h1>
        <p>
          Where flavor meets passion. <br /> Cook, create, enjoy!
        </p>

        
        <button onClick={handleGetStarted}>GET STARTED</button>
      </div>
    </div>
  );
};

export default HeroSection;


