import React from 'react';
import './Home.css';

import { BrowserRouter as NavLink} from "react-router-dom";


function Home({ match }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href='/contact/'>To Contact</a>
      </header>
    </div>
  );
}

export default Home;
