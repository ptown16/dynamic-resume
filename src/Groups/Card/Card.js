import React from 'react';
import './Card.css';

import CardTop from '../../Components/CardTop/CardTop'
import {Link} from 'react-router-dom';

function Card({
  image,
  title,
  subtitle,
  points,
  startTime,
  endTime,
  match
}) {
  const pointListElements = [];
  for (const point of points) {
    pointListElements.push(<li key={pointListElements.length} className="card-point">{point}</li>)
  }
  return (
    <Link to={match.url + "/" + 1} className="card">
      <CardTop image={image} title={title} subtitle={subtitle}/>
      <ul className="card-point-list">
        {pointListElements}
      </ul>
    </Link>
  );
}

export default Card;
