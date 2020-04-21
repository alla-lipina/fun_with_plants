import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkGreen = `#007500`
const lightGreen = `#91FFE5`
const blueGray = `#282c35`

export default merge(defaultThemeColors, {
  text: blueGray,
  primary: darkGreen,
  heading: blueGray,
  modes: {
    dark: {
      background: blueGray,
      primary: lightGreen,
      highlight: lightGreen,
    },
  },
})
