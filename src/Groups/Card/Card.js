import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

import ThemeDataContext from "Contexts/ThemeDataContext";
import PageDataContext from "Contexts/PageDataContext";

import Hoverable from "Components/Hoverable/Hoverable";
import Button from "Components/Button/Button";

import { setThemeColors } from "Utilities/setThemeColors";

import { ReactComponent as XIcon } from "Resources/XIcon.svg";

import themeData from "Data/themes.json";

class Card extends Hoverable {
  render() {
    // Get the values that the card needs
    let theme = this.context;
    if (!theme) {
      theme = themeData.themes["default"];
    }
    const { card, variant = "normal", imageHeight = 250 } = this.props;
    const colors = {
      ...setThemeColors(theme, [
        "cardBackground",
        "cardBackgroundHover",
        "cardShortDescriptionTitle",
        "cardShortDescriptionSubtitle",
        "cardShortDescriptionText",
        "cardShortDescriptionTextHover",
        "cardTitleText",
        "cardTitleBackground",
        "cardSubtitleText",
        "cardSubtitleBackground",
        "cardX",
        "cardXBackground",
        "navigationCardTitle"
      ]),
      none: "rgba(1, 1, 1, 0)"
    };

    // Set bullet points at bottom of card
    let shortDescription;
    let shortDescriptionTitle;
    let shortDescriptionSubtitle;
    let CTAbutton;
    if (card.shortDescription && variant !== "expanded") {
      if (card.shortDescriptionTitle) {
        shortDescriptionTitle = (
          <h4
            className="short-description-title"
            style={{
              color: colors.cardShortDescriptionTitle
            }}
          >
            {card.shortDescriptionTitle}
          </h4>
        );
      }
      if (card.shortDescriptionSubtitle) {
        shortDescriptionSubtitle = (
          <h5
            className="short-description-subtitle"
            style={{
              color: colors.cardShortDescriptionSubtitle
            }}
          >
            {card.shortDescriptionSubtitle}
          </h5>
        );
      }
      if (card.link) {
        CTAbutton = (
          <PageDataContext.Consumer>
            {page => (
              <Button
                link={theme.link + page.link + card.link}
                variant="small-right"
              >
                Learn More...
              </Button>
            )}
          </PageDataContext.Consumer>
        );
      }
      shortDescription = (
        <div className="card-content">
          {shortDescriptionTitle}
          {shortDescriptionSubtitle}
          <p
            className="card-short-description"
            style={{
              color: colors.cardShortDescriptionText
            }}
            dangerouslySetInnerHTML={{ __html: card.shortDescription }}
          ></p>
          {CTAbutton}
        </div>
      );
    }

    // set subtitle if exists
    let subtitle;
    if (card.subtitle) {
      subtitle = (
        <h4
          className="card-body-subtitle"
          style={{
            color: colors.cardSubtitleText,
            backgroundColor: colors.cardSubtitleBackground
          }}
        >
          {card.subtitle}
        </h4>
      );
    }

    // set image if exists
    let cardImageStyle;
    if (card.image) {
      const cardBodyImg = require("Resources/cards/" + card.image.link);
      cardImageStyle = {
        backgroundImage: `url(${cardBodyImg})`,
        height: `${imageHeight}px`
      };
    } else {
      cardImageStyle = {
        backgroundColor: colors.cardBackground
      };
    }

    let x;
    let hoverOverlay;

    if (this.state.hovered && variant === "navigation") {
      hoverOverlay = (
        <div
          className="card-hover-overlay"
          style={{
            backgroundColor: this.state.hovered
              ? colors.cardBackgroundHover
              : colors.none
          }}
        />
      );
    }
    let linkedCard = () => {
      return (
        <div
          className="card"
          style={{
            backgroundColor: colors.cardBackground,
            boxShadow: theme.shadow,
            borderRadius: variant === "expanded" ? "0px" : "10px"
          }}
        >
          {cardBody}
        </div>
      );
    };

    switch (variant) {
      case "expanded":
        x = (
          <PageDataContext.Consumer>
            {page => {
              return (
                <Link className="x-icon-link" to={theme.link + page.link}>
                  <XIcon
                    className="x-icon"
                    fill={colors.cardX}
                    style={{ backgroundColor: colors.cardXBackground }}
                    width="20px"
                    height="20px"
                  />
                </Link>
              );
            }}
          </PageDataContext.Consumer>
        );
        break;
      default:
        break;
    }
    const title = (
      <h2
        className="card-body-title"
        style={{
          color: colors.cardTitleText,
          backgroundColor:
            variant === "navigation"
              ? colors.navigationCardTitle
              : colors.cardTitleBackground
        }}
      >
        {card.title}
      </h2>
    );

    const cardBody = (
      <div className="card-body">
        <div className="card-titles">
          {card.title ? title : false}
          {subtitle}
        </div>
        <div
          className="card-body-image"
          style={cardImageStyle}
          alt={card.image ? card.image.alt : ""}
        >
          {hoverOverlay}
        </div>
        {x}
        {shortDescription}
      </div>
    );

    if (variant === "navigation") {
      linkedCard = () => {
        return (
          <Link
            to={theme.link + card.link}
            className="card"
            style={{
              backgroundColor: colors.cardBackground,
              boxShadow: theme.shadow,
              borderRadius: variant === "expanded" ? "0px" : "10px"
            }}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            {cardBody}
          </Link>
        );
      };
    }

    if (variant !== "expanded") {
      return linkedCard();
    }
    return (
      <div
        className="card"
        style={{
          backgroundColor: colors.cardBackground,
          boxShadow:
            this.state.hovered && card.link ? theme.shadow : theme.shadowHover,
          borderRadius: variant === "expanded" ? "0px" : "10px"
        }}
      >
        {cardBody}
      </div>
    );
  }
}
Hoverable.contextType = ThemeDataContext;

export default Card;
