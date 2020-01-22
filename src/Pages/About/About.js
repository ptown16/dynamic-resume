import React from "react";
import "./About.css";

import NavigationCards from "Groups/NavigationCards/NavigationCards";

import { displayCardSection } from "Utilities/displayCardSection";

import Page from "Pages/Page/Page";

function About({ overlay }) {
  return (
    <Page overlay={overlay} className="about-page">
      {displayCardSection("about")}
      <NavigationCards title="To Page" pageOn="About" />
    </Page>
  );
}

export default About;
