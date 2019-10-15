import React from 'react';
import './CardSection.css';

import { BrowserRouter as Route } from "react-router-dom";

import ExpandedCard from '../ExpandedCard/ExpandedCard'

function CardSection({
  title,
  children
}) {
  const cardRoutes = []
  for (const card of children) {
    cardRoutes.push(<Route path={"/" + card.props.title + "/"} render={() => {
        return <ExpandedCard image={card.props.image} title={card.props.title} subtitle={card.props.subtitle} />
      }
    } />)
  }
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
