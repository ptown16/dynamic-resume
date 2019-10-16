import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as StaticRouter, Route, Switch, Redirect} from "react-router-dom";

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

import Header from './Groups/Header/Header'

import cardPages from './Data/cardPages.json'

function Index() {
  const header = (
    <Header pageObjects={cardPages.pages}/>
  )
  return (
    <Fragment>
      <StaticRouter>
        <Switch>
          <Route path="/home" render={() => <Home header={header} cardSections={cardPages.pages[0].cardSections}/>} />
          <Route path="/contact" render={() => <Contact header={header}/>} />
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
