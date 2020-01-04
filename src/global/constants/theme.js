import {Platform} from 'react-native';
const colors = {
  accent: "#F3534A",
  primary: "#0AC4BA",
  secondary: "#2BDA8E",
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  gray2: "#C5CCD6",
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
    fontFamily: Platform.OS === 'ios' ? 'ChalkboardSE-Bold' : 'sans-serif-medium',
  },
  h2: {
    fontSize: sizes.h2,
    fontFamily: Platform.OS === 'ios' ? 'ChalkboardSE-Bold' : 'sans-serif-medium',
  },
  h3: {
    fontSize: sizes.h3
  },
  h4: {
    fontSize: sizes.h4,
    fontFamily: Platform.OS === 'ios' ? 'ChalkboardSE-Bold' : 'sans-serif-medium',
  },
  normal: {
    fontFamily: Platform.OS === 'ios' ? 'ChalkboardSE-Light' : 'sans-serif-condensed',
  },
  header: {
    fontSize: sizes.header
  },
  title: {
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  },
};

export { colors, sizes, fonts };