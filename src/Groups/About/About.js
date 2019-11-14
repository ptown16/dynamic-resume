import React from 'react';
import './About.css';

import ThemeDataContext from 'Contexts/ThemeDataContext'

import SectionTitle from 'Components/SectionTitle/SectionTitle'

import {setThemeColors} from 'Utilities/setThemeColors'

function About({
  image,
  imageAlt,
  title,
  height = 200,
  children
}) {

  let theme = React.useContext(ThemeDataContext)
  let colors = setThemeColors(theme, ["aboutContentBackground", "aboutContentText"])

  const aboutHeight = `${height}px`

  let aboutImageStyle
  let aboutContentStyle
  let aboutImage
  if (image) {
    console.log(image)
    const aboutImg = require('Resources/about/' + image)
    aboutImageStyle = {backgroundImage: `url(${aboutImg})`, width: aboutHeight, height: aboutHeight}
    aboutContentStyle = {gridTemplateColumns: `${aboutHeight} auto`, gridColumnGap: "30px"}
    aboutImage = (
      <div className="about-image-container">
        <div className="about-image" style={aboutImageStyle} alt={imageAlt}/>
      </div>
    )
  }

  return (
    <div className="about-section" >
      <SectionTitle>{title}</SectionTitle>
      <div className="about-content" style={{...aboutContentStyle, height: aboutHeight}}>
        {aboutImage}
        <div className="about-text-container" style={{ backgroundColor: colors.aboutContentBackground }}>
          <p className="about-text" style={{ color: colors.aboutContentText }}>{children}</p>
        </div>
      </div>
    </div>
  )
}

export default About;
