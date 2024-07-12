// frontend/src/components/MyArt.jsx
import React from 'react';
import Item from './Item';

const MyArt = () => {
  return (
    <div className="my-art">
      <h2>My Art</h2>
      {Array.from({ length: 10 }, (_, i) => (
        <Item key={i} category="art" id={i} />
      ))}
    </div>
  );
};

export default MyArt;
