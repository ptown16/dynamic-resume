import React from 'react';
import './HeaderItem.css';

import {Link} from 'react-router-dom';

import ThemeDataContext from '../../Contexts/ThemeDataContext'

class HeaderItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  render() {
    const colors = {
      headerItem: this.context.colors[this.context.location["headerItem"]],
      headerItemText: this.context.colors[this.context.location["headerItemText"]],
      headerItemHover: this.context.colors[this.context.location["headerItemHover"]],
      headerItemHoverText: this.context.colors[this.context.location["headerItemHoverText"]]
    }
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
