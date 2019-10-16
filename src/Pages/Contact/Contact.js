import React from 'react';
import './Contact.css';

import {sectionDataToCards} from '../../Utilities/sectionDataToCards'

function Contact({
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

export default Contact;
