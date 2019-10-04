import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as StaticRouter, Route} from "react-router-dom";

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

import Header from './Groups/Header/Header'

function Index() {
  return (
    <StaticRouter>
      <Header pages={[
        {link: "/", text: "Home"},
        {link: "/contact", text: "Contact"}
      ]}/>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contact/" component={Contact} />
        <Route component={PageNotFound} />
      </div>
    </StaticRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
