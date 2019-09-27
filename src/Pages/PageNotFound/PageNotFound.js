import React from 'react';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="page-not-found-page">
      <header className="page-not-found-box">
        <p>
          This page was not found...
        </p>
        <a href='/'>To Home</a>
      </header>
    </div>
  );
}

export default PageNotFound;
