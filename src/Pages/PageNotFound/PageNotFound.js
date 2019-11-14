import React from 'react';
import './PageNotFound.css';

import Page from 'Pages/Page/Page'

import HeroBanner from 'Groups/HeroBanner/HeroBanner'
import NavigationCards from 'Groups/NavigationCards/NavigationCards'

function PageNotFound({
  header
}) {
  return (
    <Page className="page-not-found-page">
      <HeroBanner image="testimg.jpeg" alt="A forest full of trees" text="404 Page Not Found" pctHeight={50}/>
      <NavigationCards title="Try these pages" pageOn="404" />
    </Page>
  );
}

export default PageNotFound;
