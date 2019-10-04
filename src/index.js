import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as StaticRouter, Route, Switch} from "react-router-dom";

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

import Header from './Groups/Header/Header'

function PageObject(link, text) {
  return {
    link: link,
    text: text,
  }
}

function Index() {
  return (
    <Fragment>
      <Header pageObjects={[
        PageObject("/", "Home"),
        PageObject("/contact/", "Contact"),
        PageObject("/404/", "404")
      ]}/>
      <StaticRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact/" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </StaticRouter>
    </Fragment>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
