import React from "react";
import "./Projects.css";

import NavigationCards from "Groups/NavigationCards/NavigationCards";

import { displayCardSection } from "Utilities/displayCardSection";

import Page from "Pages/Page/Page";

function Projects({ overlay }) {
  return (
    <Page overlay={overlay} className="projects-page">
      {displayCardSection("workExperience")}
      {displayCardSection("personalProjects")}
      {displayCardSection("schoolProjects")}
      <NavigationCards pageOn="Projects" />
    </Page>
  );
}

export default Projects;
