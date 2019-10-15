import React from 'react';
import './ExpandedCard.css';

import CardTop from '../../Components/CardTop/CardTop'

function ExpandedCard({
  image,
  title,
  subtitle,
  description
}) {
  return (
  <div className="card-expanded">
    <CardTop image={image} title={title} subtitle={subtitle} />
    <p>
      {description}
    </p>
  </div>
  );
}

export default ExpandedCard;
