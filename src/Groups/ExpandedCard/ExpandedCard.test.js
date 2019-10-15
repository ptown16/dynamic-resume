import React from 'react';
import ReactDOM from 'react-dom';
import ExpandedCard from './ExpandedCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExpandedCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
