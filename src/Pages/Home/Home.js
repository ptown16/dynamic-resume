import React from 'react';
import './Home.css';

import nebraskaImage from '../../Resources/nebraskaN.jpg'

import CardSection from '../../Groups/CardSection/CardSection'
import Card from '../../Groups/Card/Card'

function Home({header}) {
  return (
    <div className="home-page">
      {header}
      <CardSection title="Education">
        <Card
          image={<img src={nebraskaImage} alt="University of Nebraska Logo"/>}
          title="Testing123"
          subtitle="Software Engineering Major"
          points={[
            "GPA: 9.99",
            "Dean's List in Spring 2018, Fall 2018, and Spring 2019"
          ]}
        />
        <Card
          image={<img src={nebraskaImage} alt="Nebby"/>}
          title="The Griffin School (High School)"
          subtitle="Graduated with Honors"
          points={[
            "GPA: 4.56",
            "I know this is high school so nobody cares"
          ]}
        />
      </CardSection>
      <CardSection title="Something Else">
        <Card
          image={<img src={nebraskaImage} alt="University of Nebraska Logo"/>}
          title="University of Nebraska-Lincoln"
          subtitle="Software Engineering Major"
          points={[
            "GPA: 9.99",
            "Dean's List in Spring 2018, Fall 2018, and Spring 2019"
          ]}
        />
        <Card
          image={<img src={nebraskaImage} alt="Nebby"/>}
          title="The Griffin School (High School)"
          subtitle="Graduated with Honors"
          points={[
            "GPA: 4.56",
            "I know this is high school so nobody cares"
          ]}
        />
      </CardSection>
    </div>
  );
}

export default Home;
