import React from 'react';
import { Link } from 'react-router-dom';
import './styling/Notfound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container text-center">
        <h1 className="title">404 - Page Not Found</h1>
        <p className="message">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="button">Go Back to Home</Link>
        <p className="icon mt-4" role="img" aria-label="Sad face">😢</p>
      </div>
    </div>
  );
};

export default NotFound;
