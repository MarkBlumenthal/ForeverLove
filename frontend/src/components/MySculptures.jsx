// frontend/src/components/MySculptures.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './MySculptures.css'; // Ensure the CSS file is imported
import Footer from './Footer';

const MySculptures = () => {
  const descriptions = [
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
    "This is the description for art piece 1. It is quite long to test the word wrapping functionality. Make sure that this text wraps neatly within the container and does not overflow the width of the page. This is a test description to verify the layout and styling of the content.",
  ];

  return (
    <div className="my-sculptures">
      <h1 className="my-sculptures-heading">Sculptures</h1>
      <div className="nav-buttons">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/art" className="nav-link">
          Art
        </Link>
        <Link to="/plants" className="nav-link">
          Plants
        </Link>
        <Link to="/jewelry" className="nav-link">
          Jewelry
        </Link>
        <Link to="/sculptures" className="nav-link">
          Sculptures
        </Link>
      </div>
      <div className="items-container">
        {Array.from({ length: 6 }, (_, i) => (
          <Item key={i} category="sculptures" id={i} description={descriptions[i]} />
        ))}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default MySculptures;
