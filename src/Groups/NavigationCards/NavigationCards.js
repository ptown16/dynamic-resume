import React from 'react';
import './NavigationCards.css';

import pageData from 'Data/pages.json'

import Card from 'Groups/Card/Card'
import CardSection from 'Groups/CardSection/CardSection'

function NavigationCards({ pageOn }) {

  const pageCards = []
  if (pageData.pages.length > 0) {
    for (const page of pageData.pages) {
      if (pageOn !== page.name) {
        pageCards.push(
          <Card key={pageCards.length} height={200} variant="navigation" card={
            {
              link: page.link,
              title: page.name,
            }
          }/>
        )
      }
    }
  }

  return (
    <CardSection section={{title: "To Page"}} grid={4}>
      {pageCards}
    </CardSection>
  )
}

export default NavigationCards;
