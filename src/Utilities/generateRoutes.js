import React from 'react'

import {Route, Redirect} from "react-router-dom";

import ExpandedCard from '../Groups/ExpandedCard/ExpandedCard'

export function generateRoutes(data, pageComponents, header) {
  const allRoutes = []
  for (const page of data.pages) {
    const SelectedPage = pageComponents[page.name];
    for (const section of page.cardSections) {
      for (const card of section.cards) {
        allRoutes.push(
          <Route key={allRoutes.length} path={page.link + card.link} render={() => <SelectedPage header={header} cardSections={page.cardSections} overlay={<ExpandedCard data={card} location={page.link}/>} location={page.link} />} />
        )
      }
    }
    allRoutes.push(
      <Route key={allRoutes.length} exact path={page.link} render={() => <SelectedPage header={header} cardSections={page.cardSections} location={page.link} />} />
    )
    allRoutes.push(
      <Redirect key={allRoutes.length} from={page.link} to={page.link} />
    )
  }
  return allRoutes
}
