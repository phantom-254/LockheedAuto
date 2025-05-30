import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ImageCarousel from "./Carousel"; // Import the carousel
import "./styling/Index.css";

const Index = () => {
  const contactInfo = {
    email: "$name@gmail.com",
    phone: "+1 684-325-891",
    social: {
      facebook: "https://www.facebook.com/$name",
      instagram: "https://www.instagram.com/$name",
      x: "https://twitter.com/$name",
      linkedin: "https://www.linkedin.com/company/$name",
    },
  };

  return (
    <main className="index-container">
      <div className="carousel-container">
        <ImageCarousel /> {/* Added carousel here */}
      </div>
      
      <header className="main-header">
        <h1>Welcome  $name </h1>
        <p>The sole purpose of this website is to give a voice to the clients and employees who see flaws in the deliverance of seervice within the company.</p>
        <p>We value the integrity and as such we  have decided that your identities be anonymous . Nevertheless we expect utmost  discipline while using the app.</p>
        <p>Enjoy the app!!</p>
        
      </header>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <ul>
          <li>
            Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li><br />
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
        <Link to="/Aboutus" className="nav-button">
          Learn More About Us
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
