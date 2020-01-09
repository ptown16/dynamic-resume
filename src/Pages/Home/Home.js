import React from "react";
import "./Home.css";

import Page from "Pages/Page/Page";

import HeroBanner from "Groups/HeroBanner/HeroBanner";

import ThemeDataContext from "Contexts/ThemeDataContext";

import { displayCardSection } from "Utilities/displayCardSection";

function Home({ overlay }) {
  const theme = React.useContext(ThemeDataContext);

  return (
    <Page overlay={overlay} className="home-page">
      <HeroBanner
        pretext="Please consider"
        subtext={`for your ${theme.positionApplied}.`}
        image="mountains.jpg"
        alt="A forest full of trees"
        text="Peyton Tanzillo"
      />
      {displayCardSection("workExperience")}
      {displayCardSection("education")}
    </Page>
  );
}

export default Home;
