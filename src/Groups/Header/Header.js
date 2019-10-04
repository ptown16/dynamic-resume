import React from 'react';
import './Header.css';

import HeaderItem from '../../Components/HeaderItem/HeaderItem'

function Header({
  pages
}) {
  const headerItems = []
  if (pages && pages.length > 0) {
    for (const page of pages) {
      headerItems.push(<HeaderItem text={page.text ? page.text : null} link={page.link ? page.link : null} />)
    }
  }
  return (
    <div className="header-container">
      {headerItems}
    </div>
  );
}

export default Header;
