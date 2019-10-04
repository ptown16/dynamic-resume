import React from 'react';
import './Header.css';

function Header({
  pages
}) {
  let headerText = ""
  if (pages && pages.length > 0) {
    for (const page of pages) {
      headerText += `${page}... `
    }
  }
  return (
    <div className="header-container">
      {headerText}
    </div>
  );
}

export default Header;
