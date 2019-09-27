import React from 'react';
import './Home.css';

function Home({ match }) {
  return (
    <div className="home-page">
      <header className="home-box">
        <p>
          Home!
        </p>
        <a href='/contact/'>To Contact</a>
      </header>
    </div>
  );
}

export default Home;
