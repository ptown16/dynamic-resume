import React from 'react';
import {Link} from 'react-router-dom';

import './Card.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'
import PageDataContext from 'Contexts/PageDataContext'

import Hoverable from 'Components/Hoverable/Hoverable'

import {setThemeColors} from 'Utilities/setThemeColors'

import { ReactComponent as XIcon } from 'Resources/XIcon.svg'

class Card extends Hoverable {


  render() {

    // Get the values that the card needs
    const theme = this.context
    const { card, height = 200, variant = "normal" } = this.props
    const colors = {
      ...setThemeColors(theme, ["cardBackground", "cardBackgroundHover", "cardText", "cardTextHover", "cardTitleText", "cardTitleBackground", "cardSubtitleText", "cardSubtitleBackground", "cardX", "cardXBackground"]),
      none: "rgba(1, 1, 1, 0)"
    }
    let imageHeight = height


    // Set bullet points at bottom of card
    let cardPoints

    if (card.points && variant !== "expanded") {
      const pointListElements = [];
      for (const point of card.points) {
        pointListElements.push(<li key={pointListElements.length} className="card-point">{point}</li>)
      }
      imageHeight = height - (height / 3)
      cardPoints = (
        <ul className="card-point-list" style={{marginTop: `${imageHeight}px`,color: this.state.hovered ? colors.cardTextHover : colors.cardText}}>
          {pointListElements}
        </ul>
      )
    }

    // set subtitle if exists
    let subtitle
    if (card.subtitle) {
      subtitle = <h4 className="card-body-subtitle" style={{color: colors.cardSubtitleText, backgroundColor: colors.cardSubtitleBackground}}>{card.subtitle}</h4>
    }

    // set image if exists
    let cardImageStyle
    if (card.image) {
      const cardBodyImg = require('Resources/cards/' + card.image.link)
      cardImageStyle = {backgroundImage: `url(${cardBodyImg})`, height: `${imageHeight}px`}
    } else {
      cardImageStyle = {backgroundColor: colors.cardBackground, height: `${imageHeight}px`}
    }

    let x
    let getHoverOverlay = () => <div className="card-hover-overlay" style={{backgroundColor: this.state.hovered ? colors.cardBackgroundHover : colors.none}} />
    let hoverOverlay
    let linkedCard = () => {
      return (
        <PageDataContext.Consumer>
          { page =>
          <Link to={theme.link + page.link + card.link} className="card" style={{backgroundColor: (this.state.hovered ? colors.cardBackgroundHover : colors.cardBackground), height: height, boxShadow: (!this.state.hovered && card.link ? theme.shadow : theme.shadowHover) }} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            {cardBody}
          </Link>
          }
        </PageDataContext.Consumer>
      )
    }

    switch(variant) {
      case "expanded":
        x = (
          <PageDataContext.Consumer>
            {page => {
              return <Link className="x-icon-link" to={theme.link + page.link} style={{marginTop: `-${imageHeight}px`}}><XIcon className="x-icon" fill={colors.cardX} style={{backgroundColor: colors.cardXBackground}} width="20px" height="20px"/></Link>
            }
          }
          </PageDataContext.Consumer>
        )
        break
      case "navigation":
        hoverOverlay = getHoverOverlay()
        break
      default:
        hoverOverlay = getHoverOverlay()
    }

    const cardBody = (
      <div className="card-body-image" style={cardImageStyle} alt={card.image ? card.image.alt : ""}>
        {x}
        {hoverOverlay}
        <div className="card-content" style={{marginTop: `-${imageHeight}px`}}>
          <div className="card-title-subtitle">
            <h2 className="card-body-title" style={{color: colors.cardTitleText, backgroundColor: colors.cardTitleBackground}}>{card.title}</h2>
            {subtitle}
          </div>
          {cardPoints}
        </div>
      </div>
    )

    if (variant === "navigation") {
      linkedCard = () => {
        return (
          <Link to={theme.link + card.link} className="card" style={{backgroundColor: (this.state.hovered ? colors.cardBackgroundHover : colors.cardBackground), height: height, boxShadow: (!this.state.hovered ? theme.shadowHover : theme.shadow) }} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            {cardBody}
          </Link>
        )
      }
    }

    if (card.link && variant !== "expanded") {
      return linkedCard()
    }
    return (<div className="card" style={{backgroundColor: colors.cardBackground, height: height, boxShadow: (this.state.hovered && card.link ? theme.shadow : theme.shadowHover) }}>{cardBody}</div>)
  }
}
Hoverable.contextType = ThemeDataContext

export default Card;
