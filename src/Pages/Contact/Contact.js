import React from 'react';
import './Contact.css';

import {sectionDataToCards} from '../../Utilities/sectionDataToCards'

import Header from '../../Groups/Header/Header'

import PageDataContext from '../../Contexts/PageDataContext'

function Contact({
  cardSections,
  overlay,
  location
}) {
  const page = React.useContext(PageDataContext)
  if (overlay) {
    return (
      <div className="home-page">
          <Header />
          {sectionDataToCards(page)}
          <div class="overlay">
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

export default Contact;
