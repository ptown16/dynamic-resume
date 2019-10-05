import React from 'react';
import './CardSection.css';

function CardSection({
  title,
  children
}) {
  return (
    <div className="card-section">
      <h1 className="card-section-title">{title}</h1>
      <div className="card-section-cards">
        {children}
      </div>
    </div>
  );
}

export default CardSection;
