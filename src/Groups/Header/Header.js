import React, {useState} from 'react';
import './Header.css';

import themeData from 'Data/themes.json'
import pageData from 'Data/pages.json'

import ThemeDataContext from 'Contexts/ThemeDataContext'

import HeaderItem from 'Components/HeaderItem/HeaderItem'
import LogoBox from 'Components/LogoBox/LogoBox'

import {setThemeColors} from 'Utilities/setThemeColors'

import { ReactComponent as VeggieBurger } from 'Resources/Veggieburger.svg'

function Header() {
  let theme = React.useContext(ThemeDataContext)
  if (!theme) {
    theme = themeData.themes["default"]
  }

  const [isExpanded, setIsExpanded] = useState(false)

  const headerItems = []

  const colors = setThemeColors(theme, ["logo", "logoBackground", "logoText", "headerBackground", "veggieBurger"])
  if (pageData.pages.length > 0) {
    for (const page of pageData.pages) {
      headerItems.push(<HeaderItem key={headerItems.length} name={page.name} link={theme.link + page.link} />)
    }
  }
  return (
    <div className="header-container" style={{backgroundColor: colors.headerBackground, boxShadow: theme.shadow }}>
      <LogoBox size={50} logoColor={colors.logo} boxColor={colors.logoBackground}/>
      <h3 className="logo-name" style={{color: colors.logoText}}>PEYTON TANZILLO</h3>
      <div className={"header-items-container " + (isExpanded ? "" : "hide-mobile")}>
        {headerItems}
      </div>
      <div className="veggie-burger-container">
        <VeggieBurger className="veggie-burger" width="32px" height="32px" fill={colors.veggieBurger} onClick={() => setIsExpanded(!isExpanded)}/>
      </div>
    </div>
  );
}

export default Header;
