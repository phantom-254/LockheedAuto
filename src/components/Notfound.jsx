import React from 'react';
// Import external CSS
import './styling/Notfound.css';


const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
      <h1 className="title">404 - Page Not Found</h1>
      
      <p className="message">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="button">Go Back to Home</a>
      <div className="image"></div>
    </div>
    </div>
    
  );
};

export default NotFound;
