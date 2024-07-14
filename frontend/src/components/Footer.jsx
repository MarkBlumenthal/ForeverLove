// frontend/src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Ensure the CSS file is imported

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow me on</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} bounce size="2xl" style={{color: "#fa006c"}} />
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} bounce size="2xl" style={{color: "#fb046f"}} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


