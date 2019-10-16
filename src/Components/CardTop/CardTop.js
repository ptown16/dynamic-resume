import React from 'react';
import './CardTop.css';
import {Link} from 'react-router-dom';

import { ReactComponent as XIcon } from '../../Resources/XIcon.svg'

function CardTop({
  image,
  title,
  subtitle,
  closeLink
}) {
  let x
  if (closeLink) {
    x = <Link className="x-icon" to={closeLink}><XIcon fill="#fff" width="20px" height="20px"/></Link>
  }
  return (
    <div className="card-top">
      <img src={require("../../Resources/cards/" + image.link)} className="card-image" alt={image.alt}/>
      <div className="card-title-container">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-subtitle">{subtitle}</h4>
      </div>
      {x}
    </div>
  );
}

export default CardTop;
