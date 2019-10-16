import React from 'react';

import './ExpandedCard.css';


import CardTop from '../../Components/CardTop/CardTop'

function ExpandedCard({
  data,
  location
}) {
  return (
  <div className="card-expanded">
    <CardTop image={data.image} title={data.title} subtitle={data.subtitle} closeLink={location}/>
    <p>
      {data.description}
    </p>
  </div>
  );
}

export default ExpandedCard;
