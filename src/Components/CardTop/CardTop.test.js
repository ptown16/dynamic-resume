import React from 'react';
import ReactDOM from 'react-dom';
import CardTop from './cardTop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardTop/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
