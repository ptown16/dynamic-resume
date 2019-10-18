import React from 'react';
import './CardSection.css';

import ThemeDataContext from '../../Contexts/ThemeDataContext'

function CardSection({
  section,
  children
}) {
  const theme = React.useContext(ThemeDataContext)
  return (
    <div className="card-section">
      <h1 className="card-section-title" style={{color: theme.colors[theme.location["cardSectionText"]]}}>{section.title}</h1>
      <div className="card-section-cards">
        {children}
      </div>
    </div>
  );
}

export default CardSection;
