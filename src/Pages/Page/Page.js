import React from 'react';
import './Page.css';

function Page({page, overlay}) {
  return (
    <div className="page">
      {
        overlay ?
          <div className="overlay-dimmer">{overlay}</div>
        :
          false
      }
      {page}
    </div>
  );
}

export default Page;
