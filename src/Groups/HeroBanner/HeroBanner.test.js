import React from 'react';
import ReactDOM from 'react-dom';
import HeroBanner from './herobanner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroBanner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
