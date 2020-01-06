import React from "react";

import "./Table.css";

import ThemeDataContext from "Contexts/ThemeDataContext";

import { setThemeColors } from "Utilities/setThemeColors";

function Table({ table, variant = "coding" }) {
  const theme = React.useContext(ThemeDataContext);
  const colors = setThemeColors(theme, [
    "tableHeaderText",
    "tableHeaderBackground",
    "tableCellText",
    "tableCellBackground"
  ]);

  if (variant === "coding") {
    const tableKeyToTitle = key => {
      switch (key) {
        case "versionControl":
          return "Version Control";
        default:
          return key.charAt(0).toUpperCase() + key.slice(1);
      }
    };
    let tableStyling = {
      headers: [],
      values: []
    };
    for (const tableKey of Object.keys(table)) {
      tableStyling.headers.push(
        <th
          key={`header${tableKey}`}
          style={{
            color: colors.tableHeaderText,
            backgroundColor: colors.tableHeaderBackground
          }}
        >
          {tableKeyToTitle(tableKey)}
        </th>
      );
      tableStyling.values.push(
        <td
          key={`values${tableKey}`}
          style={{
            color: colors.tableCellText,
            backgroundColor: colors.tableCellBackground
          }}
        >
          {table[tableKey]}
        </td>
      );
    }
    const horizontalRows = [];
    for (let i = 0; i < tableStyling.headers.length; i++) {
      horizontalRows.push(
        <tr key={horizontalRows.length}>
          {tableStyling.headers[i]}
          {tableStyling.values[i]}
        </tr>
      );
    }
    return (
      <table>
        <tbody>{horizontalRows}</tbody>
      </table>
    );
  }
}

export default Table;
