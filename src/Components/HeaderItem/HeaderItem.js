import React from 'react';
import './HeaderItem.css';

import themeData from '../../Data/themes.json'

import {Link} from 'react-router-dom';

import ThemeDataContext from '../../Contexts/ThemeDataContext'

import Hoverable from '../Hoverable/Hoverable'

import {setThemeColors} from '../../Utilities/setThemeColors'

class HeaderItem extends Hoverable {

  render() {
    let theme = this.context
    if (!theme) {
      theme = themeData.themes["default"]
    }
    const colors = setThemeColors(theme, ["headerItem", "headerItemText", "headerItemHover", "headerItemHoverText"])
    const { link, name } = this.props;
    if (link && window.location.pathname.includes(link)) {
      return (
        <div className="header-item highlighted" style={{backgroundColor: colors.headerItemHover, color: colors.headerItemHoverText}}>
          <p>{name ? name : "null"}</p>
        </div>
      );
    }
    let headerItemStyle
    if (this.state.hovered) {
      headerItemStyle = {backgroundColor: colors.headerItemHover, color: colors.headerItemHoverText}
    } else {
      headerItemStyle = {backgroundColor: colors.headerItem, color: colors.headerItemText}
    }
    return (
        <div className="header-item" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <Link to={link ? link : "/home"} style={headerItemStyle} className="header-item-link">
            <p>{name ? name : "null"}</p>
          </Link>
        </div>
    );
  }
}
HeaderItem.contextType = ThemeDataContext

export default HeaderItem;
