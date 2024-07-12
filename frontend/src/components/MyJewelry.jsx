// frontend/src/components/MyJewelry.jsx
import React from 'react';
import Item from './Item';

const MyJewelry = () => {
  return (
    <div className="my-jewelry">
      <h2>My Jewelry</h2>
      {Array.from({ length: 10 }, (_, i) => (
        <Item key={i} category="jewelry" id={i} />
      ))}
    </div>
  );
};

export default MyJewelry;
