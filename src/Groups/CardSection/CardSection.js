import React from 'react';
import './CardSection.css';

function CardSection({
  title,
  children
}) {
  return (
    <div className="card-section">
      <h1 className="card-section-title">{title}</h1>
      {children}
    </div>
  );
}

export default CardSection;
