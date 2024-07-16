// frontend/src/components/MyArt.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './MyArt.css'; // Ensure the CSS file is imported
import Footer from './Footer';

const MyArt = () => {
  return (
    <div className="my-art">
      <h1 className="my-art-heading">My Art</h1>
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
          <Item key={i} category="art" id={i} />
        ))}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default MyArt;

