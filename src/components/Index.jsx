import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./styling/Index.css";

const Index = () => {
  const contactInfo = {
    email: "lockheedauto@gmail.com",
    phone: "+1 684-325-891",
    social: {
      facebook: "https://www.facebook.com/lockheedauto",
      instagram: "https://www.instagram.com/lockheedauto",
      x: "https://twitter.com/lockheedauto",
      linkedin: "https://www.linkedin.com/company/lockheedauto",
    },
  };

  return (
    <main className="index-container">
      <div className="carousel-container">

      </div>

      <header className="main-header">
        <h1>Welcome to Lockheed Auto</h1>
        <p>
          Looking to own a vehicle? No matter the make or model—rest assured,
          we have it or can get it for you.
        </p>
        <p>
          At Lockheed Auto, we take variety seriously. If you don't find the
          specific vehicle you’re looking for, contact us—we'll assist in
          acquiring the car of your choice.
        </p>
      </header>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <ul>
          <li>
            Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li>
          <li>
            Phone: <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}>{contactInfo.phone}</a>
          </li>
        </ul>
      </section>

      <section className="social-section">
        <h2>Connect with Us</h2>
        <p>
          Feel free to offer recommendations and give feedback on the following
          platforms:
        </p>
        <ul>
          <li><a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href={contactInfo.social.x} target="_blank" rel="noopener noreferrer">Twitter (X)</a></li>
          <li><a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>

      <section className="navigation-section">
        <h2>Explore More</h2>
        <Link to="/Getproducts" className="nav-button">
          View Available Vehicles
        </Link>
        <Link to="/Aboutus" className="nav-button">
          Learn More About Us
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
