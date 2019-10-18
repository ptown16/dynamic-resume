import React from 'react';

import './ExpandedCard.css';

import CardTop from '../../Components/CardTop/CardTop'

function ExpandedCard({
  card
}) {
  return (
  <div className="card-expanded">
    <CardTop image={card.image} title={card.title} subtitle={card.subtitle} variant="closable"/>
    <p>
      {card.description}
    </p>
  </div>
  );
}

export default ExpandedCard;
