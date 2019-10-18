import React from 'react';

import './ExpandedCard.css';

import ThemeDataContext from '../../Contexts/ThemeDataContext'

import CardTop from '../../Components/CardTop/CardTop'

function ExpandedCard({
  card
}) {
  const theme = React.useContext(ThemeDataContext)
  const colors = {
    cardBackground: theme.colors[theme.location["cardBackground"]],
    cardText: theme.colors[theme.location["cardText"]]
  }
  return (
  <div className="card-expanded" style={{backgroundColor: colors.cardBackground}}>
    <CardTop image={card.image} title={card.title} subtitle={card.subtitle} variant="closable"/>
    <p style={{color: colors.cardText}}>
      {card.description}
    </p>
  </div>
  );
}

export default ExpandedCard;
