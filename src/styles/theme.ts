export default {
  grid: {
    container: '100rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weights: {
      light: 300,
      normal: 400,
      bold: 600
    },
    sizes: {
      extraSmall: '0.8rem',
      small: '1.2rem',
      medium: '1.6rem',
      large: '2.0rem',
      extraLarge: '2.4rem',
      displayExtraSmall: '4.0rem',
      displaySmall: '4.8rem',
      display: '5.6rem',
      displayLarge: '7.2rem',
      displayExtraLarge: '8.0rem'
    }
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    cyan: '#00E7F9',
    supernova: '#FFCB00'
  },
  spacings: {
    extraSmall: '0.4rem',
    small: '0.8rem',
    medium: '1.6rem',
    large: '2.4rem',
    extraLarge: '4.8rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
