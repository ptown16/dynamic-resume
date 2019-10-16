import React from 'react'

import CardSection from '../Groups/CardSection/CardSection'
import Card from '../Groups/Card/Card'

export function sectionDataToCards(data) {
  const formattedSections = [];
  for (const section of data) {
    const formattedCards = []
    for (const card of section.cards) {
      formattedCards.push(
        <Card key={formattedCards.length}
          data={card}
        />
      )
    }
    formattedSections.push(
      <CardSection key={formattedSections.length} data={section}>
        {formattedCards}
      </CardSection>
    )
  }
  return formattedSections
}
