import React from 'react';
import './HeaderItem.css';

import {Link} from 'react-router-dom';

function HeaderItem({
  name,
  link
}) {
  if (link && link === window.location.pathname) {
    return (
      <div className="header-item highlighted">
        <p>{name ? name : "null"}</p>
      </div>
    );
  }
  return (
      <div className="header-item">
        <Link to={link ? link : "/home"} className="header-item-link">
          <p>{name ? name : "null"}</p>
        </Link>
      </div>
  );
}

export default HeaderItem;
