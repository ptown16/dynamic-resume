import React from 'react';
import './Home.css';

import nebraskaImage from '../../Resources/nebraskaN.jpg'

import CardSection from '../../Groups/CardSection/CardSection'
import Card from '../../Groups/Card/Card'

function Home({ match }) {
  return (
    <div className="home-page">
      <CardSection title="Card Section Title">
        <Card
          image={<img src={nebraskaImage} alt="Nebby"/>}
          title="University of Nebraska-Lincoln"
          subtitle="Software Engineering Major"
          points={[
            "GPA: 9.99",
            "Dean's List in Spring 2018, Fall 2018, and Spring 2019"
          ]}
        />
      </CardSection>
    </div>
  );
}

export default Home;
