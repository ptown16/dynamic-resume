import React from 'react';
import './Page.css';

import Header from '../../Groups/Header/Header'

import ThemeDataContext from '../../Contexts/ThemeDataContext'

function Page({
  overlay,
  children
}) {
  const theme = React.useContext(ThemeDataContext)
  const pageStyle = {
    backgroundColor: theme.colors[theme.location["pageBackground"]]
  }
  if (overlay) {
    return (
      <div className="page" style={pageStyle}>
          <Header />
          {children}
          <div className="overlay">
            {overlay}
          </div>
      </div>
    )
  }

  return (
    <div className="page" style={pageStyle}>
      <Header />
      {children}
    </div>
  )
}

export default Page;
