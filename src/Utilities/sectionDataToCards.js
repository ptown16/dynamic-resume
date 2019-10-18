import React from 'react'

import CardSection from '../Groups/CardSection/CardSection'
import Card from '../Groups/Card/Card'

export function sectionDataToCards(page) {

  const formattedSections = [];
  for (const section of page.cardSections) {
    const formattedCards = []
    for (const card of section.cards) {
      formattedCards.push(
        <Card key={formattedCards.length} card={card} />
      )
    }
    formattedSections.push(
      <CardSection key={formattedSections.length} section={section}>
        {formattedCards}
      </CardSection>
    )
  }
  return formattedSections
}
