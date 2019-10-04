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
    <a href={link ? link : "/"}>
      <div className="header-item">
        <p>{text ? text : "null"}</p>
      </div>
    </a>
  );
}

export default HeaderItem;
