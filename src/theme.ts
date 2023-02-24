import { Colors } from "construct-ui";

const spacingUnit = 0.25;

const theme = {
  colour: {
    neutral: {
      100: Colors.GREY100,
      200: Colors.GREY200,
      300: Colors.GREY300,
      700: Colors.BLUE_GREY700,
      800: Colors.BLUE_GREY800,
      900: Colors.BLUE_GREY900,
    },
  },
  spacing: {
    unit: spacingUnit,
    units: (multiple: number) => `${multiple * spacingUnit}rem`,
  },
  typography: {
    fontFamilyBody: "sans-serif",
    fontFamilyHeading: "serif",
    baseFontSizePx: "18",
  },
};

export default theme;
