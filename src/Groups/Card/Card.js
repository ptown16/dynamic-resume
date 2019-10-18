import React from 'react';
import './Card.css';

import ThemeDataContext from '../../Contexts/ThemeDataContext'
import PageDataContext from '../../Contexts/PageDataContext'

import CardTop from '../../Components/CardTop/CardTop'
import {Link} from 'react-router-dom';

function Card({
  image,
  card
}) {
  const theme = React.useContext(ThemeDataContext)
  const page = React.useContext(PageDataContext)
  const pointListElements = [];
  for (const point of card.points) {
    pointListElements.push(<li key={pointListElements.length} className="card-point">{point}</li>)
  }
  return (
    <Link to={theme.link + page.link + card.link} className="card">
      <CardTop image={card.image} title={card.title} subtitle={card.subtitle}/>
      <ul className="card-point-list">
        {pointListElements}
      </ul>
    </Link>
  );
}

export default Card;
