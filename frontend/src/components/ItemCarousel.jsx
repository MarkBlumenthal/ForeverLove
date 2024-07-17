// frontend/src/components/ItemCarousel.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCarousel = ({ images, onImageClick }) => {
  return (
    <Carousel indicators={false}> {/* Disable indicators to remove the three lines */}
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img 
            className="d-block w-100" 
            src={image} 
            alt={`Slide ${index}`} 
            onClick={() => onImageClick(image)} // Handle image click
            style={{ cursor: 'pointer' }} // Add cursor pointer style
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ItemCarousel;




