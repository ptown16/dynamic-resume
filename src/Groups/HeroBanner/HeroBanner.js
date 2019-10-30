import React from 'react';

import './HeroBanner.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'

function HeroBanner({
  image,
  text,
  alt
}) {
  const theme = React.useContext(ThemeDataContext)
  return(
    <div className="hero-banner">
      <img src={require("Resources/banners/" + image)} alt={alt}/>
      <div className="hero-overlay">
        <h1 className="hero-text-overlay">{text}</h1>
      </div>
    </div>
  );
}


export default HeroBanner;
