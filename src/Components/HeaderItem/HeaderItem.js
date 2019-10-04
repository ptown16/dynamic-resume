import React from 'react';
import './HeaderItem.css';

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
        <a href={link ? link : "/"}>
          <p>{text ? text : "null"}</p>
        </a>
      </div>
  );
}

export default HeaderItem;
