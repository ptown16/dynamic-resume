import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as StaticRouter, Route, Switch, Redirect} from "react-router-dom";

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

import Header from './Groups/Header/Header'

import {generateRoutes} from './Utilities/generateRoutes'

import cardPages from './Data/cardPages.json'

function Index() {
  const header = (
    <Header pageObjects={cardPages.pages}/>
  )
  const pages = {
    "Home": Home,
    "Contact": Contact
  };
  console.log(generateRoutes(cardPages, pages, header))
  return (
    <Fragment>
      <StaticRouter>
        <Switch>
          {generateRoutes(cardPages, pages, header)}
          <Redirect exact from="/" to="/home" />
          <Route render={() => <PageNotFound header={header}/>} />
        </Switch>
      </StaticRouter>
    </Fragment>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
