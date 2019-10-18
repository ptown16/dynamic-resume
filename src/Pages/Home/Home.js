import React from 'react';
import './Home.css';

import Header from '../../Groups/Header/Header'

import {sectionDataToCards} from '../../Utilities/sectionDataToCards'

import PageDataContext from '../../Contexts/PageDataContext'

function Home({
  overlay
}) {
  const page = React.useContext(PageDataContext)
  if (overlay) {
    return (
      <div className="home-page">
          <Header />
          {sectionDataToCards(page)}
          <div className="overlay">
            {overlay}
          </div>
      </div>
    )
  }

  return (
    <div className="home-page">
      <Header />
      {sectionDataToCards(page)}
    </div>
  )
}

export default Home;
