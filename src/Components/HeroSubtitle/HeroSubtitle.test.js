import React from 'react';
import ReactDOM from 'react-dom';
import HeroSubtitle from './heroSubtitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroSubtitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
