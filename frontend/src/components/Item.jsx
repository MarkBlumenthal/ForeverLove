// frontend/src/components/Item.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Item = ({ category, id }) => {
  const [hearts, setHearts] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3001/ratings/${category}`)
      .then(response => {
        const item = response.data.find(item => item.id === id);
        if (item) {
          setHearts(item.hearts);
        }
      });
  }, [category, id]);

  const handleRate = () => {
    axios.post(`http://localhost:3001/rate/${category}/${id}`)
      .then(response => {
        if (response.data.success) {
          setHearts(response.data.hearts);
        }
      });
  };

  return (
    <div className="item">
      <h3>Item {id}</h3>
      <p>{hearts} ❤️</p>
      <button onClick={handleRate}>Rate with ❤️</button>
    </div>
  );
};

export default Item;
