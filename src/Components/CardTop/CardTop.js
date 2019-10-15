import React from 'react';
import './CardTop.css';

function CardTop({
  image,
  title,
  subtitle
}) {
  return (
    <div className="card-top">
      <div className="card-image">{image}</div>
      <div className="card-title-container">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-subtitle">{subtitle}</h4>
      </div>
    </div>
  );
}

export default CardTop;
