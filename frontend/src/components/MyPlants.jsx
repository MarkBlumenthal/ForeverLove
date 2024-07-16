// frontend/src/components/MyPlants.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './MyPlants.css'; // Ensure the CSS file is imported
import Footer from './Footer';

const MyPlants = () => {
  return (
    <div className="my-plants">
      <h1 className="my-plants-heading">My Plants</h1>
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
          <Item key={i} category="plants" id={i} />
        ))}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default MyPlants;
