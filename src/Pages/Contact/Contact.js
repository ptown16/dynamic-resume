import React from 'react';
import './Contact.css';

import {sectionDataToCards} from '../../Utilities/sectionDataToCards'

import Page from '../Page/Page'

import PageDataContext from '../../Contexts/PageDataContext'

function Contact({
  overlay
}) {
  const page = React.useContext(PageDataContext)
  return (
    <Page overlay={overlay} className="contact-page">
      {sectionDataToCards(page)}
    </Page>
  )
}

export default Contact;
