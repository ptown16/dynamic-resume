import React from "react";
import "./Skills.css";

import NavigationCards from "Groups/NavigationCards/NavigationCards";

import { displayCardSection } from "Utilities/displayCardSection";

import Page from "Pages/Page/Page";

function Skills({ overlay }) {
  return (
    <Page overlay={overlay} className="skills-page">
      {displayCardSection("codingSkills")}
      {displayCardSection("graphicDesignSkills")}
      <NavigationCards title="To Page" pageOn="Skills" />
    </Page>
  );
}

export default Skills;
