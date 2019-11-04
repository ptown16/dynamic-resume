import React from 'react';
import './Contact.css';

import NavigationCards from 'Groups/NavigationCards/NavigationCards'

import {displayCardSection} from 'Utilities/displayCardSection'

import Page from 'Pages/Page/Page'

function Contact({
  overlay
}) {
  return (
    <Page overlay={overlay} className="contact-page">
      <NavigationCards pageOn="Contact"/>
      {displayCardSection("contact")}
    </Page>
  )
}

export default Contact;
