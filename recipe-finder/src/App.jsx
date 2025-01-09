import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutPage from "./components/AboutPage";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Main Recipe Page with Search Bar */}
          <Route 
            path="/recipes" 
            element={
              <>
                <SearchBar onSearch={setSearchQuery} />
                <h1 className="app-title">Find Your Flavour</h1>
                <RecipeList searchQuery={searchQuery} />
              </>
            } 
          />

          {/* Recipe Details Page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          
          {/* Other Routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Catch-all Redirect to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
