import React from 'react';

import './Table.css'

import ThemeDataContext from 'Contexts/ThemeDataContext'

import {setThemeColors} from 'Utilities/setThemeColors'

function Table({
  table,
  variant = "coding"
}) {

  const theme = React.useContext(ThemeDataContext)
  const colors = setThemeColors(theme, ["tableHeaderText", "tableHeaderBackground", "tableCellText", "tableCellBackground"])

  if (variant === "coding") {
    const tableKeyToTitle = (key) => {
      switch(key) {
        case "versionControl":
          return "Version Control"
        default:
          return key.charAt(0).toUpperCase() + key.slice(1)
      }
    }
    let tableStyling = {
      headers: [],
      values: []
    }
    for (const tableKey of Object.keys(table)) {
      tableStyling.headers.push(<th key={tableKey} style={{color: colors.tableHeaderText, backgroundColor: colors.tableHeaderBackground}}>{tableKeyToTitle(tableKey)}</th>)
      tableStyling.values.push(<td key={tableKey} style={{color: colors.tableCellText, backgroundColor: colors.tableCellBackground}}>{table[tableKey]}</td>)
    }
    return (
      <table>
        <thead><tr>{tableStyling.headers}</tr></thead>
        <tbody><tr>{tableStyling.values}</tr></tbody>
      </table>
    )
  }

}

export default Table;
