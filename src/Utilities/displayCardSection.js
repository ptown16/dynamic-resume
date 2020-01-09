import React from "react";

import CardSection from "Groups/CardSection/CardSection";
import Card from "Groups/Card/Card";
import cardData from "Data/cards.json";

export function displayCardSection(sectionName) {
  const section = cardData.cardSections[sectionName];
  if (!section) {
    throw new Error(`Card section of name ${sectionName} does not exist.`);
  }
  const formattedCards = [];
  for (const card of section.cards) {
    formattedCards.push(
      <Card
        key={formattedCards.length}
        card={card}
        imageHeight={section.imageHeight}
      />
    );
  }
  return <CardSection section={section}>{formattedCards}</CardSection>;
}
