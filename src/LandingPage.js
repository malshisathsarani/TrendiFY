import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-text">
        <h1>Welcome to Trendify</h1>
        <p>Explore our wide range of products!</p>
      </div>
      <div className="landing-image">
        <img src="/assets/landing4.png" alt="Landing" />
      </div>
    </div>
  );
}

export default LandingPage;
