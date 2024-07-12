// frontend/src/components/MyPlants.jsx
import React from 'react';
import Item from './Item';

const MyPlants = () => {
  return (
    <div className="my-plants">
      <h2>My Plants</h2>
      {Array.from({ length: 10 }, (_, i) => (
        <Item key={i} category="plants" id={i} />
      ))}
    </div>
  );
};

export default MyPlants;
