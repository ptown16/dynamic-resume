import React from 'react';
import './Home.css';

import Page from '../Page/Page'

import HeroBanner from '../../Groups/HeroBanner/HeroBanner'

import {displayCardSection} from '../../Utilities/displayCardSection'

function Home({
  overlay
}) {
  return (
    <Page overlay={overlay} className="home-page">
      <HeroBanner image="testimg.jpeg" alt="A forest full of trees" text="Test Hero Banner"/>
      {displayCardSection("education")}
      <h1>hey this is cool to test</h1>
      {displayCardSection("testing")}
    </Page>
  )
}

export default Home;
