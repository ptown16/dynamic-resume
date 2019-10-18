import React from 'react'

import {Route, Redirect} from "react-router-dom";

import ExpandedCard from '../Groups/ExpandedCard/ExpandedCard'

import pageData from '../Data/cardPages.json'
import themeData from '../Data/themes.json'

import PageDataContext from '../Contexts/PageDataContext'
import ThemeDataContext from '../Contexts/ThemeDataContext'

export function generateRoutes(pageComponents) {
  const allRoutes = []
  for (const themeKey of Object.keys(themeData.themes)) {
    for (const page of pageData.pages) {
      const SelectedPage = pageComponents[page.name];
      for (const section of page.cardSections) {
        for (const card of section.cards) {
          allRoutes.push(
            buildExpandedPage(allRoutes.length, themeData.themes[themeKey], page, SelectedPage, card)
          )
        }
      }
      allRoutes.push(
        buildNormalPage(allRoutes.length, themeData.themes[themeKey], page, SelectedPage)
      )
      allRoutes.push(
        <Redirect key={allRoutes.length} from={themeData.themes[themeKey].link + page.link} to={themeData.themes[themeKey].link + page.link} />
      )
      allRoutes.push(
        <Redirect key={allRoutes.length} from={page.link} to={"/twitter" + page.link} />
      )
    }
  }
  return allRoutes
}

function buildExpandedPage(key, theme, page, PageComponent, card) {
  return (
    <Route key={key} path={theme.link + page.link + card.link} render={() => {
      return (
        <ThemeDataContext.Provider value={theme}>
          <PageDataContext.Provider value={page}>
            <PageComponent overlay={<ExpandedCard card={card}/>} />} />
          </PageDataContext.Provider>
        </ThemeDataContext.Provider>
      );
    }} />
  )
}

function buildNormalPage(key, theme, page, PageComponent) {
  return (
    <Route key={key} path={theme.link + page.link} render={() => {
      return (
        <ThemeDataContext.Provider value={theme}>
          <PageDataContext.Provider value={page}>
            <PageComponent />} />
          </PageDataContext.Provider>
        </ThemeDataContext.Provider>
      );
    }} />
  )
}
