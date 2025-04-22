import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Lockheed Auto. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li> <br />
          <li><a href="#terms-of-service">Terms of Service</a></li> <br />
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;