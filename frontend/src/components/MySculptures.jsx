// frontend/src/components/MySculptures.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './MySculptures.css'; // Ensure the CSS file is imported
import Footer from './Footer';

const MySculptures = () => {
  return (
    <div className="my-sculptures">
      <h1 className="my-sculptures-heading">My Sculptures</h1>
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
      <div className="items-container">
        {Array.from({ length: 6 }, (_, i) => (
          <Item key={i} category="sculptures" id={i} />
        ))}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default MySculptures;

