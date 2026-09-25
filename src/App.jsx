import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => setShowProducts(true);
  const handleGoHome = () => setShowProducts(false);

  if (showProducts) {
    return <ProductList onHomeClick={handleGoHome} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="tagline">Where Green Meets Serenity</p>
        <AboutUs />
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
