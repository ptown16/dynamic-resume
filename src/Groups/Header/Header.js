import React from 'react';
import './Header.css';

import pageData from '../../Data/cardPages.json'

import ThemeDataContext from '../../Contexts/ThemeDataContext'

import HeaderItem from '../../Components/HeaderItem/HeaderItem'
import LogoBox from '../../Components/LogoBox/LogoBox'

function Header() {
  const theme = React.useContext(ThemeDataContext)
  const headerItems = []
  const colors = {
    logoText: theme.colors[theme.location["logoText"]],
    headerBackground: theme.colors[theme.location["headerBackground"]]
  }
  if (pageData.pages.length > 0) {
    for (const page of pageData.pages) {
      headerItems.push(<HeaderItem key={headerItems.length} name={page.name} link={theme.link + page.link} />)
    }
  }
  return (
    <div className="header-container" style={{backgroundColor: colors.headerBackground}}>
      <LogoBox size={50} logoColor={theme.colors[theme.location["logo"]]} boxColor={theme.colors[theme.location["logoBackground"]]}/>
      <h3 className="logo-name" style={{color: colors.logoText}}>PEYTON TANZILLO</h3>
      <div className="header-items-container">
        {headerItems}
      </div>
    </div>
  );
}

export default Header;
