import React from 'react';

import ThemeDataContext from '../../Contexts/ThemeDataContext'

class Hoverable extends React.Component {

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

}
Hoverable.contextType = ThemeDataContext

export default Hoverable;
