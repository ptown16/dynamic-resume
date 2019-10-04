import React from 'react';
import ReactDOM from 'react-dom';
import HeaderItem from './headerItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
