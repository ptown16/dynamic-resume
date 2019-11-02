import React from 'react';
import './Contact.css';

import {displayCardSection} from 'Utilities/displayCardSection'

import Page from 'Pages/Page/Page'

function Contact({
  overlay
}) {
  return (
    <Page overlay={overlay} className="contact-page">
      {displayCardSection("testing")}
      {displayCardSection("contact")}
    </Page>
  )
}

export default Contact;
