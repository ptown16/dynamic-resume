import React from 'react';

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

export default Hoverable;
