import React from "react";
import "./NavigationCards.css";

import pageData from "Data/pages.json";

import Card from "Groups/Card/Card";
import CardSection from "Groups/CardSection/CardSection";

function NavigationCards({ title, pageOn }) {
  const pageCards = [];
  if (pageData.pages.length > 0) {
    for (const page of pageData.pages) {
      if (pageOn !== page.name) {
        pageCards.push(
          <Card
            key={pageCards.length}
            imageHeight={150}
            variant="navigation"
            card={{
              link: page.link,
              title: page.name,
              image: {
                link: "mountains.jpg",
                alt: "Mountains"
              }
            }}
          />
        );
      }
    }
  }

  return <CardSection section={{ title: title }}>{pageCards}</CardSection>;
}

export default NavigationCards;
