import React from 'react';
import {Link} from 'react-router-dom';

import './Card.css';

import ThemeDataContext from '../../Contexts/ThemeDataContext'
import PageDataContext from '../../Contexts/PageDataContext'

import CardTop from '../../Components/CardTop/CardTop'
import Hoverable from '../../Components/Hoverable/Hoverable'

class Card extends Hoverable {

  render() {
    const theme = this.context
    const { card } = this.props
    const colors = {
      cardBackground: theme.colors[theme.location["cardBackground"]],
      cardBackgroundHover: theme.colors[theme.location["cardBackgroundHover"]],
      cardText: theme.colors[theme.location["cardText"]]
    }

    const pointListElements = [];
    for (const point of card.points) {
      pointListElements.push(<li key={pointListElements.length} className="card-point">{point}</li>)
    }

    let cardBackground = colors.cardBackground;

    const cardBody = (
      <>
        <CardTop image={card.image} title={card.title} subtitle={card.subtitle}/>
        <ul className="card-point-list" style={{color: colors.cardText}}>
          {pointListElements}
        </ul>
      </>
    )
    if (card.link && card.description) {
      if (this.state.hovered) {
        cardBackground = colors.cardBackgroundHover
      }
      const linkedCard = (page) => {
        return (
          <Link to={theme.link + page.link + card.link} className="card" style={{backgroundColor: cardBackground}} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
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
