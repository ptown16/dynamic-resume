import React from 'react';
import './Card.css';

import CardTop from '../../Components/CardTop/CardTop'
import {Link} from 'react-router-dom';

function Card({
  image,
  data,
  location
}) {
  const pointListElements = [];
  for (const point of data.points) {
    pointListElements.push(<li key={pointListElements.length} className="card-point">{point}</li>)
  }
  return (
    <Link to={location + data.link} className="card">
      <CardTop image={data.image} title={data.title} subtitle={data.subtitle}/>
      <ul className="card-point-list">
        {pointListElements}
      </ul>
    </Link>
  );
}

export default Card;
