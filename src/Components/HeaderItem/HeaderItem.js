import React from 'react';
import './HeaderItem.css';

import {Link} from 'react-router-dom';

function HeaderItem({
  text,
  link
}) {

  if (link && link === window.location.pathname) {
    return (
      <div className="header-item highlighted">
        <p>{text ? text : "null"}</p>
      </div>
    );
  }
  return (
      <div className="header-item">
        <Link to={link ? link : "/home"} className="header-item-link">
          <p>{text ? text : "null"}</p>
        </Link>
      </div>
  );
}

export default HeaderItem;
