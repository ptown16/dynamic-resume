import themeData from 'Data/themes.json'

export function setThemeColors(theme, colorValues) {
  let usedTheme = theme
  if (!theme) {
    usedTheme = themeData.themes["default"]
  }
  let result = {}
  for (const colorValue of colorValues) {
    const customColorName = usedTheme.location[colorValue]
    const defaultColorName = themeData.defaultLocation[colorValue]
    if (customColorName) {
      result[colorValue] = usedTheme.colors[customColorName]
    } else if (defaultColorName) {
      result[colorValue] = usedTheme.colors[defaultColorName]
    } else {
      throw new Error('NoDefaultColor', `No color set for the value ${colorValue} (occured when looking at ${theme.name} theme)`)
    }
  }
  return result
}
