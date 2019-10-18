import React from 'react';
import './PageNotFound.css';

import Header from '../../Groups/Header/Header'

function PageNotFound({header}) {
  return (
    <div className="page-not-found-page">
      <Header/>
      <header className="page-not-found-box">
        <p>
          This page was not found...
        </p>
      </header>
    </div>
  );
}

export default PageNotFound;
