import React from 'react';
import './CardSection.css';

function CardSection({
  sectionTitle,
  children
}) {
  return (
    <div className="card-section">
      <h1 className="card-section-title">{sectionTitle}</h1>
      {children}
    </div>
  );
}

export default CardSection;
