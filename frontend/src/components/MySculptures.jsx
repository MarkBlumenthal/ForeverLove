// frontend/src/components/MySculptures.jsx
import React from 'react';
import Item from './Item';

const MySculptures = () => {
  return (
    <div className="my-sculptures">
      <h2>My Sculptures</h2>
      {Array.from({ length: 6 }, (_, i) => (
        <Item key={i} category="sculptures" id={i} />
      ))}
    </div>
  );
};

export default MySculptures;
