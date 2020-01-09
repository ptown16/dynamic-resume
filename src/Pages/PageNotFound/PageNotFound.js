import React from "react";
import "./PageNotFound.css";

import Page from "Pages/Page/Page";

import HeroBanner from "Groups/HeroBanner/HeroBanner";
import NavigationCards from "Groups/NavigationCards/NavigationCards";

function PageNotFound() {
  return (
    <Page className="page-not-found-page">
      <HeroBanner
        image="mountains.jpg"
        alt="A forest full of trees"
        text="404 Page Not Found"
        pctHeight={50}
      />
      <NavigationCards title="Try these pages" pageOn="404" />
    </Page>
  );
}

export default PageNotFound;
