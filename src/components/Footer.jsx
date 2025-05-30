import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white p-4 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} SuggestionBridge. All rights reserved.</p>
        <nav>
          <ul className="list-unstyled d-flex justify-content-center gap-3">
            <li><Link to="/privacy-policy" className="text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="text-white">Terms of Service</Link></li>
            <li><Link to="/contact" className="text-white">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
