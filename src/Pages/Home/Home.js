import React from 'react';
import './Home.css';

import Page from '../Page/Page'

import {displayCardSection} from '../../Utilities/displayCardSection'

function Home({
  overlay
}) {
  return (
    <Page overlay={overlay} className="home-page">
      {displayCardSection("education")}
      <h1>hey this is cool to test</h1>
      {displayCardSection("testing")}
    </Page>
  )
}

export default Home;
