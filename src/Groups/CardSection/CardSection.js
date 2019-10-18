import React from 'react';
import './CardSection.css';

function CardSection({
  section,
  children
}) {
  return (
    <div className="card-section">
      <h1 className="card-section-title">{section.title}</h1>
      <div className="card-section-cards">
        {children}
      </div>
    </div>
  );
}

export default CardSection;
