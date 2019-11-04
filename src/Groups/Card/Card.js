import React from 'react';
import {Link} from 'react-router-dom';

import './Card.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'
import PageDataContext from 'Contexts/PageDataContext'

//import CardTop from 'Components/CardTop/CardTop'
import Hoverable from 'Components/Hoverable/Hoverable'

import {setThemeColors} from 'Utilities/setThemeColors'

class Card extends Hoverable {


  render() {
    const theme = this.context
    const { card, height, variant = "normal" } = this.props
    const colors = {
      ...setThemeColors(theme, ["cardBackground", "cardBackgroundHover", "cardText", "cardTextHover", "cardTitleText", "cardTitleBackground", "cardSubtitleText", "cardSubtitleBackground"]),
      none: "rgba(1, 1, 1, 0)"
    }
    let cardPoints
    let imageHeight = height

    if (card.points) {
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

    let subtitle
    if (card.subtitle) {
      subtitle = <h4 className="card-body-subtitle" style={{color: colors.cardSubtitleText, backgroundColor: colors.cardSubtitleBackground}}>{card.subtitle}</h4>
    }

    let cardImageStyle
    if (card.image) {
      const cardBodyImg = require('Resources/cards/' + card.image.link)
      cardImageStyle = {backgroundImage: `url(${cardBodyImg})`, height: `${imageHeight}px`}
    } else {
      cardImageStyle = {backgroundColor: colors.cardBackground, height: `${imageHeight}px`}
    }

    const cardBody = (
      <div className="card-body-image" style={cardImageStyle} alt={card.image ? card.image.alt : ""}>
        <div className="card-hover-overlay" style={{backgroundColor: this.state.hovered ? colors.cardBackgroundHover : colors.none}} />
        <div className="card-content" style={{marginTop: `-${imageHeight}px`}}>
          <div className="card-title-subtitle">
            <h2 className="card-body-title" style={{color: colors.cardTitleText, backgroundColor: colors.cardTitleBackground}}>{card.title}</h2>
            {subtitle}
          </div>
          {cardPoints}
        </div>
      </div>
    )
    if (card.link || variant === "navigation") {
      const linkedCard = (page = {link: ""}) => {
        console.log(theme.link + page.link + card.link)
        return (
          <Link to={theme.link + page.link + card.link} className="card" style={{backgroundColor: (this.state.hovered ? colors.cardBackgroundHover : colors.cardBackground), height: height, boxShadow: theme.shadow }} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            {cardBody}
          </Link>
        )
      }
      if (variant === "navigation") {
        return linkedCard()
      }
      return (
        <PageDataContext.Consumer>
          { page => linkedCard(page)}
        </PageDataContext.Consumer>
      );
    }
    return (<div className="card" style={{backgroundColor: colors.cardBackground, height: height, boxShadow: theme.shadow }}>{cardBody}</div>)
  }
}
Hoverable.contextType = ThemeDataContext

export default Card;
