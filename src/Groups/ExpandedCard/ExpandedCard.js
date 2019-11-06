import React from 'react';

import './ExpandedCard.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'

import Card from 'Groups/Card/Card'

import {setThemeColors} from 'Utilities/setThemeColors'

function ExpandedCard({
  card
}) {
  const theme = React.useContext(ThemeDataContext)
  const colors = setThemeColors(theme, ["cardBackground", "cardText"])
  return (
  <div className="card-expanded" style={{backgroundColor: colors.cardBackground}}>
    <Card card={card} variant="expanded"/>
    <p className="card-description" style={{color: colors.cardText}}>
      {card.description}
    </p>
  </div>
  );
}

export default ExpandedCard;
