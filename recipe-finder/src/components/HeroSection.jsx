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
      {/* Background Image */}
      <div className="background-image" alt="Delicious food on a plate"></div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content">
        <h1>Cooking Experiences Like a Chef</h1>
        <p>
          Where flavor meets passion. <br /> Cook, create, enjoy!
        </p>

        {/* Get Started Button */}
        <button onClick={handleGetStarted}>GET STARTED</button>
      </div>
    </div>
  );
};

export default HeroSection;


