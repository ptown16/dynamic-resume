import themeData from '../Data/themes.json'

export function setThemeColors(theme, colorValues) {
  let result = {}
  for (const colorValue of colorValues) {
    const customColorName = theme.location[colorValue]
    const defaultColorName = themeData.defaultLocation[colorValue]
    if (customColorName) {
      result[colorValue] = theme.colors[customColorName]
    } else if (defaultColorName) {
      result[colorValue] = theme.colors[defaultColorName]
    } else {
      throw new Error('NoDefaultColor', `No color set for the value ${colorValue} (occured when looking at ${theme.name} theme)`)
    }
  }
  return result
}
