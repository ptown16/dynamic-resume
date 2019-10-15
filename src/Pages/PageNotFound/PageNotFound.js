import React from 'react';
import './PageNotFound.css';

function PageNotFound({header}) {
  return (
    <div className="page-not-found-page">
      {header}
      <header className="page-not-found-box">
        <p>
          This page was not found...
        </p>
      </header>
    </div>
  );
}

export default PageNotFound;
