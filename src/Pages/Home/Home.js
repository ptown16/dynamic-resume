import React from 'react';
import './Home.css';

import Page from '../Page/Page'

import {sectionDataToCards} from '../../Utilities/sectionDataToCards'

import PageDataContext from '../../Contexts/PageDataContext'

function Home({
  overlay
}) {
  const page = React.useContext(PageDataContext)
  return (
    <Page overlay={overlay} className="home-page">
      {sectionDataToCards(page)}
    </Page>
  )
}

export default Home;
