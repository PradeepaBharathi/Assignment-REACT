import React, { useState } from 'react';
import './Square.css';

const Square = ({ size }) => {
  const [isSplit, setIsSplit] = useState(false);

 
  const handleClick = () => {
    setIsSplit(true);
  };

  if (!isSplit) {
    return (
      <div
        className="square"
        style={{
          width: size,
          height: size,
        }}
        onClick={handleClick}
      />
    );
  }

 
  const newSize = size / 2;
  return (
    <div
      className="square-container"
      style={{
        width: size,
        height: size,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
      }}
    >
      <Square size={newSize} />
      <Square size={newSize} />
      <Square size={newSize} />
      <Square size={newSize} />
    </div>
  );
};

const Infinitesquare = () => {
  const initialSize = 400; // Set the initial square size
  return (
    <div className="app-container">
      <Square size={initialSize} />
    </div>
  );
};

export default Infinitesquare;
