import React from 'react';
import './Header.css';

import themeData from '../../Data/themes.json'
import pageData from '../../Data/cardPages.json'

import ThemeDataContext from '../../Contexts/ThemeDataContext'

import HeaderItem from '../../Components/HeaderItem/HeaderItem'
import LogoBox from '../../Components/LogoBox/LogoBox'

import {setThemeColors} from '../../Utilities/setThemeColors'

function Header() {
  let theme = React.useContext(ThemeDataContext)
  if (!theme) {
    theme = themeData.themes["default"]
  }
  const headerItems = []

  const colors = setThemeColors(theme, ["logo", "logoBackground", "logoText", "headerBackground"])
  if (pageData.pages.length > 0) {
    for (const page of pageData.pages) {
      headerItems.push(<HeaderItem key={headerItems.length} name={page.name} link={theme.link + page.link} />)
    }
  }
  return (
    <div className="header-container" style={{backgroundColor: colors.headerBackground}}>
      <LogoBox size={50} logoColor={colors.logo} boxColor={colors.logoBackground}/>
      <h3 className="logo-name" style={{color: colors.logoText}}>PEYTON TANZILLO</h3>
      <div className="header-items-container">
        {headerItems}
      </div>
    </div>
  );
}

export default Header;
