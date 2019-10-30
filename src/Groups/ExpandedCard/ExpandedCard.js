import React from 'react';

import './ExpandedCard.css';

import ThemeDataContext from '../../Contexts/ThemeDataContext'

import CardTop from '../../Components/CardTop/CardTop'

import {setThemeColors} from '../../Utilities/setThemeColors'

function ExpandedCard({
  card
}) {
  const theme = React.useContext(ThemeDataContext)
  const colors = setThemeColors(theme, ["cardBackground", "cardText"])
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
