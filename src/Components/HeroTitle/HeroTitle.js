import React from 'react';
import './HeroTitle.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'
import {setThemeColors} from 'Utilities/setThemeColors'

function HeroTitle({
  text
}) {

  const theme = React.useContext(ThemeDataContext)
  const colors = setThemeColors(theme, ["heroBannerText", "heroBannerTextBackground"])

  return (
    <div className="wrapper">
      <h1 className="hero-title" style={{color: colors.heroBannerText, backgroundColor: colors.heroBannerTextBackground}}>
        {text}
      </h1>
    </div>
  )
}

export default HeroTitle;
