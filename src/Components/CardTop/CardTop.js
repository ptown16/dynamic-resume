import React from 'react';
import './CardTop.css';
import {Link} from 'react-router-dom';

import ThemeDataContext from '../../Contexts/ThemeDataContext'
import PageDataContext from '../../Contexts/PageDataContext'

import {setThemeColors} from '../../Utilities/setThemeColors'

import { ReactComponent as XIcon } from '../../Resources/XIcon.svg'

function CardTop({
  image,
  title,
  subtitle,
  hoveredColor,
  variant,
}) {
  const theme = React.useContext(ThemeDataContext)
  const page = React.useContext(PageDataContext)
  const colors = setThemeColors(theme, ["cardImageBorder", "cardTitleText", "cardSubtitleText", "cardX"])
  let x
  if (variant === "closable") {
    x = <Link className="x-icon" to={theme.link + page.link}><XIcon fill={colors.cardX} width="20px" height="20px"/></Link>
  }
  return (
    <div className="card-top">
      <img src={require("../../Resources/cards/" + image.link)} className="card-image" alt={image.alt} style={{borderStyle: "solid", borderWidth: "2px", borderColor: colors.cardImageBorder}}/>
      <div className="card-title-container">
        <h2 className="card-title" style={{color: hoveredColor ? hoveredColor : colors.cardTitleText}}>{title}</h2>
        <h4 className="card-subtitle" style={{color: hoveredColor ? hoveredColor : colors.cardSubtitleText}}>{subtitle}</h4>
      </div>
      {x}
    </div>
  );
}

export default CardTop;
