import React from 'react';
import './Header.css';

import pageData from '../../Data/cardPages.json'

import ThemeDataContext from '../../Contexts/ThemeDataContext'

import HeaderItem from '../../Components/HeaderItem/HeaderItem'
import LogoBox from '../../Components/LogoBox/LogoBox'

function Header() {
  const theme = React.useContext(ThemeDataContext)
  const headerItems = []
  if (pageData.pages.length > 0) {
    for (const page of pageData.pages) {
      headerItems.push(<HeaderItem key={headerItems.length} name={page.name} link={theme.link + page.link} />)
    }
  }
  return (
    <div className="header-container">
      <LogoBox size={50} logoColor="#ffffff" boxColor="none"/>
      <h3 className="logo-name">PEYTON TANZILLO</h3>
      <div className="header-items-container">
        {headerItems}
      </div>
    </div>
  );
}

export default Header;
