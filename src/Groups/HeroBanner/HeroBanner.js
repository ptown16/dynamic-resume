import React from 'react';

import './HeroBanner.css';

import ThemeDataContext from '../../Contexts/ThemeDataContext'

import {setThemeColors} from '../../Utilities/setThemeColors'

function HeroBanner({
  image,
  text,
  alt
}) {
  const theme = React.useContext(ThemeDataContext)
  const colors = setThemeColors(theme, ["heroBannerBackground", "heroBannerText", "heroBannerTextBackground"])
  const bannerImg = require('../../Resources/banners/' + image)
  return (
    <div className="hero-banner" style={{backgroundImage: `url(${bannerImg})`}} alt={alt}>
      <div className="hero-overlay" style={{backgroundColor: colors.heroBannerBackground}}></div>
      <div className="hero-text-container">
        <h1 className="hero-text-overlay" style={{color: colors.heroBannerText, backgroundColor: colors.heroBannerTextBackground}}>{text}</h1>
      </div>
    </div>
  );
}


export default HeroBanner;
