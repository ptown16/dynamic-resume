import React from 'react';
import ReactDOM from 'react-dom';
import HeroTitle from './heroTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
