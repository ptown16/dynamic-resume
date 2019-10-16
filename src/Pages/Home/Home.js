import React from 'react';
import './Home.css';

import {sectionDataToCards} from '../../Utilities/sectionDataToCards'

function Home({
  header,
  cardSections,
  overlay,
  location
}) {
  if (overlay) {
    return (
      <div className="home-page">
          {header}
          {sectionDataToCards(cardSections, location)}
          <div class="overlay">
            {overlay}
          </div>
      </div>
    )
  }

  return (
    <div className="home-page">
      {header}
      {sectionDataToCards(cardSections, location)}
    </div>
  )
}

export default Home;
