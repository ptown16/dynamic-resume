import React from 'react';
import './Header.css';

import HeaderItem from '../../Components/HeaderItem/HeaderItem'
import LogoBox from '../../Components/LogoBox/LogoBox'

function Header({
  pageObjects
}) {
  const headerItems = []
  if (pageObjects && pageObjects.length > 0) {
    for (const page of pageObjects) {
      headerItems.push(<HeaderItem key={headerItems.length} name={page.name ? page.name : null} link={page.link ? page.link : null} />)
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
