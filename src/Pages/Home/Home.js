import React from 'react';
import './Home.css';

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
