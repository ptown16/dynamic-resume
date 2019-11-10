import React from 'react';
import './HeroSubtitle.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'
import {setThemeColors} from 'Utilities/setThemeColors'

function HeroSubtitle({
  text,
  variant = "middle"
}) {

  const theme = React.useContext(ThemeDataContext)
  const colors = setThemeColors(theme, ["subtitleText", "subtitleBackground"])

  return (
    <div className={"wrapper subtitle-wrapper " + (variant + "-subtitle")}>
      <p className="hero-subtitle" style={{color: colors.subtitleText, backgroundColor: colors.subtitleBackground}}>
        {text}
      </p>
    </div>
  )
}

export default HeroSubtitle;
