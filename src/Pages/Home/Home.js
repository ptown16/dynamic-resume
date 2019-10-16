import React from 'react';
import './Home.css';

import {sectionDataToCards} from '../../Utilities/sectionDataToCards'

function Home({
  header,
  cardSections,
  overlay
}) {
  return (
    <div className="home-page">
      {header}
      {sectionDataToCards(cardSections)}
    </div>
  );
}

export default Home;
