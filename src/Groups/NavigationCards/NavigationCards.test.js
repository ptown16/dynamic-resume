import React from 'react';
import ReactDOM from 'react-dom';
import NavigationCards from './navigationcards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigationCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
