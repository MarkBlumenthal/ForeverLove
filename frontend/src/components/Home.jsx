// frontend/src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure the CSS file is imported
import Footer from './Footer'; // Import the Footer component

const Home = () => {
  return (
    <div className="home">
      <div className="header-container">
        <h1>Aviv Blumenthal</h1>
      </div>
      <div className="description-container">
        <p>Step into my world</p>
      </div>
      <div className="nav-buttons">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/art" className="nav-link">
          Art
        </Link>
        <Link to="/sculptures" className="nav-link">
          Sculptures
        </Link>
        <Link to="/jewelry" className="nav-link">
          Jewelry
        </Link>
        <Link to="/plants" className="nav-link">
          Plants
        </Link>
      </div>
      <div className="about-section">
        <img src="/Aviv.png" alt="Artist" className="artist-image" />
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            This is the about me section where the artist can write something about themselves.<br></br>
            It can be a few sentences or a longer paragraph, detailing their background,
            their art,<br></br> and anything else they would like to share with visitors.
          </p>
          <p>
            This is the about me section where the artist can write something about themselves.<br></br>
            It can be a few sentences or a longer paragraph, detailing their background,
            their art,<br></br> and anything else they would like to share with visitors.
          </p>
          <p>
            This is the about me section where the artist can write something about themselves.<br></br>
            It can be a few sentences or a longer paragraph, detailing their background,
            their art,<br></br> and anything else they would like to share with visitors.
          </p>
          <p>
            This is the about me section where the artist can write something about themselves.<br></br>
            It can be a few sentences or a longer paragraph, detailing their background,
            their art,<br></br> and anything else they would like to share with visitors.
          </p>
        </div>
      </div>
      <div className="gallery-heading">
        <h2>My Favourite Pieces</h2>
      </div>
      <div className="gallery">
        <img src="/gallery image.jpg" alt="Gallery Image 1" className="gallery-image" />
        <img src="/gallery image.jpg" alt="Gallery Image 2" className="gallery-image" />
        <img src="/gallery image.jpg" alt="Gallery Image 3" className="gallery-image" />
        <img src="/gallery image.jpg" alt="Gallery Image 4" className="gallery-image" />
      </div>
      <div className="contact-container">
        <div className="contact-paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
            Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
            Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.
          </p>
        </div>
        <div className="contact-form">
          <div className="contact-heading">
            <h2>Contact Me</h2>
          </div>
          <form action="https://formspree.io/f/your_form_id" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Home;
