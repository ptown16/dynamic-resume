import React from 'react';
import './SectionTitle.css'

import ThemeDataContext from 'Contexts/ThemeDataContext'

import {setThemeColors} from 'Utilities/setThemeColors'

import themeData from 'Data/themes.json'


function SectionTitle({children}) {

    let theme = React.useContext(ThemeDataContext)
    if (!theme) {
      theme = themeData.themes["default"]
    }

    const colors = setThemeColors(theme, ["sectionTitleText"])

    return (
      <h1 className="section-title" style={{color: colors.sectionTitleText}}>{children}</h1>
    )
}

export default SectionTitle;
