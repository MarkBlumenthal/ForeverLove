// frontend/src/components/Item.jsx
import React, { useState, useEffect } from 'react';
import ItemCarousel from './ItemCarousel';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Item = ({ category, id }) => {
  const [hearts, setHearts] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/ratings/${category}`)
      .then(response => {
        const itemRating = response.data.find(item => item.id === id);
        if (itemRating) {
          setHearts(itemRating.hearts);
        }
      })
      .catch(error => console.error('Error fetching ratings:', error));
  }, [category, id]);

  const handleRate = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500); // Reset the bouncing effect after the animation duration

    axios.post(`http://localhost:3001/rate/${category}/${id}`)
      .then(response => {
        if (response.data.success) {
          setHearts(response.data.hearts);
        }
      })
      .catch(error => console.error('Error updating rating:', error));
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const images = [
    `/images/${category}/${id}_1.jpg`,
    `/images/${category}/${id}_2.jpg`,
    `/images/${category}/${id}_3.jpg`,
  ];

  useEffect(() => {
    console.log('Image URLs:', images);
  }, [images]);

  return (
    <div className="item-container">
      <div className="item">
        <ItemCarousel images={images} />
      </div>
      <div className="rating-container">
        <p onClick={handleRate} style={{ cursor: 'pointer', color: 'black' }}>
          {hearts} <FontAwesomeIcon 
            icon={faHeart} 
            style={{ color: 'red' }} 
            className={isBouncing ? 'bounce' : ''} 
          />
        </p>
      </div>
      <div className="description-toggle">
        <button onClick={toggleDescription}>
          Description <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {showDescription && (
          <div className="description">
            <p>This is the description for image {id}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;









