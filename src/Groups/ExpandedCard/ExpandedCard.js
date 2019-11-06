import React from 'react';

import './ExpandedCard.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'

import Card from 'Groups/Card/Card'
import Button from 'Components/Button/Button'

import {setThemeColors} from 'Utilities/setThemeColors'

function ExpandedCard({
  card
}) {
  const theme = React.useContext(ThemeDataContext)
  const colors = setThemeColors(theme, ["cardBackground", "cardText"])

  const cardButtons = []
  if (card.buttons) {
    for (const button of card.buttons) {
      cardButtons.push(
        <Button key={cardButtons.length} button={button} />
      )
    }
  }

  return (
  <div className="card-expanded" style={{backgroundColor: colors.cardBackground}}>
    <Card card={card} variant="expanded"/>
    <div className="button-container">{cardButtons}</div>
    <p className="card-description" style={{color: colors.cardText}}>
      {card.description}
    </p>
  </div>
  );
}

export default ExpandedCard;
