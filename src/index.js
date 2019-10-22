import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as StaticRouter, Route, Switch, Redirect} from "react-router-dom";

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

import {generateRoutes} from './Utilities/generateRoutes'


function Index() {
  const pages = {
    "Home": Home,
    "Contact": Contact
  };
  return (
    <StaticRouter>
      <Switch>
        {generateRoutes(pages)}
        <Redirect exact from="/" to="/home" />
        <Route render={() => <PageNotFound/>} />
      </Switch>
    </StaticRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
