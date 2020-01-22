import React from "react";

import { Route, Redirect } from "react-router-dom";

import ExpandedCard from "Groups/ExpandedCard/ExpandedCard";

import pageData from "Data/pages.json";
import themeData from "Data/themes.json";
import cardData from "Data/cards.json";

import PageDataContext from "Contexts/PageDataContext";
import ThemeDataContext from "Contexts/ThemeDataContext";

export function generateRoutes(pageComponents) {
  const allRoutes = [];
  // For every theme that exists
  for (const themeKey of Object.keys(themeData.themes)) {
    const theme = themeData.themes[themeKey];

    // For every page that exists
    for (const page of pageData.pages) {
      const SelectedPage = pageComponents[page.name];

      // For every section on the page
      for (const sectionName of page.cardSections) {
        const section = cardData.cardSections[sectionName];
        //If that secion doesn't exist then throw and error
        if (!section) {
          throw new Error(
            `Card section of name ${sectionName} does not exist. (Specified in page ${page.name})`
          );
        }

        //For every card in the section, build a page for it if it has a link associated with it.
        for (const card of section.cards) {
          if (card.link) {
            allRoutes.push(
              buildExpandedPage(
                allRoutes.length,
                theme,
                page,
                SelectedPage,
                card
              )
            );
          }
        }
      }
      allRoutes.push(
        buildNormalPage(allRoutes.length, theme, page, SelectedPage)
      );
      allRoutes.push(
        <Redirect
          key={allRoutes.length}
          from={theme.link + page.link}
          to={theme.link + page.link}
        />
      );
      allRoutes.push(
        <Redirect
          key={allRoutes.length}
          from={page.link}
          to={"/default" + page.link}
        />
      );
    }
    allRoutes.push(
      <Redirect
        key={allRoutes.length}
        from={theme.link}
        to={theme.link + "/home"}
      />
    );
  }
  return allRoutes;
}

function buildExpandedPage(key, theme, page, PageComponent, card) {
  return (
    <Route
      key={key}
      path={theme.link + page.link + card.link}
      render={() => {
        return (
          <ThemeDataContext.Provider value={theme}>
            <PageDataContext.Provider value={page}>
              <PageComponent overlay={<ExpandedCard card={card} />} />
            </PageDataContext.Provider>
          </ThemeDataContext.Provider>
        );
      }}
    />
  );
}

function buildNormalPage(key, theme, page, PageComponent) {
  return (
    <Route
      key={key}
      path={theme.link + page.link}
      render={() => {
        return (
          <ThemeDataContext.Provider value={theme}>
            <PageDataContext.Provider value={page}>
              <PageComponent />
            </PageDataContext.Provider>
          </ThemeDataContext.Provider>
        );
      }}
    />
  );
}
