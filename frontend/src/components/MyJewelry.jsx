// frontend/src/components/MyJewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './MyJewelry.css'; // Ensure the CSS file is imported
import Footer from './Footer';

const MyJewelry = () => {
  return (
    <div className="my-jewelry">
      <h1 className="my-jewelry-heading">My Jewelry</h1>
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
          <Item key={i} category="jewelry" id={i} />
        ))}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default MyJewelry;
