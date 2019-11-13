import React from 'react';
import ReactDOM from 'react-dom';
import LogoBox from './logoBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogoBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
