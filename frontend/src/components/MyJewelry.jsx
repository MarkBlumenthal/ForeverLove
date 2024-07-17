// frontend/src/components/MyJewelry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './MyJewelry.css'; // Ensure the CSS file is imported
import Footer from './Footer';

const MyJewelry = () => {
  const descriptions = [
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
  ];

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
          <Item key={i} category="jewelry" id={i} description={descriptions[i]} />
        ))}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default MyJewelry;

