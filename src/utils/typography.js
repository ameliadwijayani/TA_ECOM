import Typography from "typography"

import theme from "typography-theme-grand-view"

// custom typo
// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: 1.666,
//   headerFontFamily: [
//     "Avenir Next",
//     "Helvetica Neue",
//     "Segoe UI",
//     "Helvetica",
//     "Arial",
//     "sans-serif",
//   ],
//   bodyFontFamily: ["Georgia", "serif"],
// })

// theme aja
// const typography = new Typography(theme)

// custom + theme
const typography = new Typography(
  {
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    headerFontFamily: [
      "Avenir Next",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    bodyFontFamily: ["Georgia", "serif"],
  },
  theme
)

export default typography
