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
    const { card } = this.props
    const colors = setThemeColors(theme, ["cardBackground", "cardBackgroundHover", "cardText", "cardTextHover", "cardTitleText", "cardTitleBackground", "cardSubtitleText", "cardSubtitleBackground"])

    const pointListElements = [];
    for (const point of card.points) {
      pointListElements.push(<li key={pointListElements.length} className="card-point">{point}</li>)
    }

    const cardBodyImg = require('Resources/cards/' + card.image.link)
    const cardBody = (
      <>
        <div className="card-body-image" style={{backgroundImage: `url(${cardBodyImg})`}} alt={card.image.alt}/>
        <div className="card-title-subtitle">
          <h2 className="card-body-title" style={{color: colors.cardTitleText, backgroundColor: colors.cardTitleBackground}}>{card.title}</h2>
          <h4 className="card-body-subtitle" style={{color: colors.cardSubtitleText, backgroundColor: colors.cardSubtitleBackground}}>{card.subtitle}</h4>
        </div>
        <ul className="card-point-list" style={{color: this.state.hovered ? colors.cardTextHover : colors.cardText}}>
          {pointListElements}
        </ul>
      </>
    )
    if (card.link && card.description) {
      const linkedCard = (page) => {
        return (
          <Link to={theme.link + page.link + card.link} className="card" style={{backgroundColor: (this.state.hovered ? colors.cardBackgroundHover : colors.cardBackground) }} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            {cardBody}
          </Link>
        )
      }
      return (
        <PageDataContext.Consumer>
          { page => linkedCard(page)}
        </PageDataContext.Consumer>
      );
    }
    return (<div className="card" style={{backgroundColor: colors.cardBackground}}>{cardBody}</div>)
  }
}
Hoverable.contextType = ThemeDataContext


export default Card;
