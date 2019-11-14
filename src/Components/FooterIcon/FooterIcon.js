import React from 'react';
import './FooterIcon.css'

import { ReactComponent as LinkedIn } from 'Resources/footerIcons/linkedin.svg'
import { ReactComponent as Email } from 'Resources/footerIcons/email.svg'
import { ReactComponent as Phone } from 'Resources/footerIcons/phone.svg'
import { ReactComponent as House } from 'Resources/footerIcons/house.svg'

import ThemeDataContext from 'Contexts/ThemeDataContext'

import Hoverable from 'Components/Hoverable/Hoverable'

import {setThemeColors} from 'Utilities/setThemeColors'

import themeData from 'Data/themes.json'


class FooterIcon extends Hoverable {

  render() {
    const ICON_SIZE = "40px";

    let theme = this.context
    if (!theme) {
      theme = themeData.themes["default"]
    }
    const {variant, link} = this.props
    const colors = setThemeColors(theme, ["footerIcon", "footerIconHovered", "footerIconBackground", "footerIconBackgroundHovered"])

    const iconColor = this.state.hovered ? colors.footerIconHovered : colors.footerIcon

    let iconSVG;
    switch(variant) {
      case "linkedin":
        iconSVG = <LinkedIn className="footer-icon" fill={iconColor} width={ICON_SIZE} height={ICON_SIZE}/>
        break;
      case "email":
        iconSVG = <Email className="footer-icon" fill={iconColor} width={ICON_SIZE} height={ICON_SIZE}/>
        break;
      case "phone":
        iconSVG = <Phone className="footer-icon" fill={iconColor} width={ICON_SIZE} height={ICON_SIZE}/>
        break;
      case "home":
        iconSVG = <House className="footer-icon" fill={iconColor} width={ICON_SIZE} height={ICON_SIZE}/>
        break;
      default:
        iconSVG = <div/>
        console.error(`FooterIcon of variant ${variant} does not exist. Please add this icon or use another icon `)
    }
    return (
      <a href={link} className="footer-icon-container" rel="noopener noreferrer" target="_blank" style={{backgroundColor: this.state.hovered ?  colors.footerIconBackgroundHovered : colors.footerIconBackground}} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{iconSVG}</a>
    )
  }
}
FooterIcon.contextType = ThemeDataContext

export default FooterIcon;
