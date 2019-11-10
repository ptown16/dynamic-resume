import React from 'react';

import './HeroBanner.css';

import HeroTitle from 'Components/HeroTitle/HeroTitle'
import HeroSubtitle from 'Components/HeroSubtitle/HeroSubtitle'

import ThemeDataContext from 'Contexts/ThemeDataContext'

import {setThemeColors} from 'Utilities/setThemeColors'

function HeroBanner({
  image,
  text,
  pretext,
  subtext,
  alt,
  pctHeight = 75
}) {
  const theme = React.useContext(ThemeDataContext)
  const colors = setThemeColors(theme, ["heroBannerBackground"])
  const bannerImg = require('../../Resources/banners/' + image)

  const pretextItem = pretext ? <HeroSubtitle text={pretext} variant="left"/> : undefined
  const subtextItem = subtext ? <HeroSubtitle text={subtext} variant="right"/> : undefined


  return (
    <div className="hero-banner" style={{backgroundImage: `url(${bannerImg})`, height: `${pctHeight}vh`, boxShadow: theme.shadow }} alt={alt}>
      <div className="hero-overlay" style={{backgroundColor: colors.heroBannerBackground}}></div>
      <div className="hero-text-container">
        {pretextItem}
        <HeroTitle text={text} />
        {subtextItem}
      </div>
    </div>
  );
}


export default HeroBanner;
