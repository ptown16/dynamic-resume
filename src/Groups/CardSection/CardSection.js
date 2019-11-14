import React from 'react';
import './CardSection.css';

import SectionTitle from 'Components/SectionTitle/SectionTitle'

function CardSection({
  section,
  children,
  grid = "flexible",
  gridCap = 6,
}) {

  // Determine the size of the grid based on prop passed in
  let gridSize
  if (grid === "flexible") {
    for (let i = gridCap; i > 0; i--) {
      if (children.length % i === 0) {
        gridSize = i
        break
      }
    }
  } else {
    gridSize = grid
  }

  let gridClass
  switch (gridSize) {
    case 6:
      gridClass = "grid-sixths"
      break
    case 5:
      gridClass = "grid-fifths"
      break
    case 4:
      gridClass = "grid-fourths"
      break
    case 3:
      gridClass = "grid-thirds"
      break
    case 2:
      gridClass = "grid-halves"
      break
    default:
      gridClass = ""
      break
  }

  return (
    <div className="card-section">
      <SectionTitle>{section.title}</SectionTitle>
      <div className={"card-section-cards " + gridClass}>
        {children}
      </div>
    </div>
  );
}

export default CardSection;
