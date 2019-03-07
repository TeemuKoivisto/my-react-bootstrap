import { ITheme } from '../types/theme'

export const defaultTheme : ITheme = {
  color: {
    textLight: '#666',
    textDark: '#222',
    bg: '#fff',
    white: '#fff',
    primary: '#2979FF',
    secondary: '#82B1FF'
  },
  spinner: {
    sizes: {
      small: {
        borderWidth: '2px',
        margin: '0 8px 0 8px',
        height: '14px',
        width: '14px',
      },
      medium: {
        borderWidth: '3px',
        margin: '10px 12px 10px 12px',
        height: '16px',
        width: '16px',
      },
      large: {
        borderWidth: '3px',
        margin: '5px 12px 5px 12px',
        height: '20px',
        width: '20px',
      },
    }
  },
  button: {
    sizes: {
      small: {
        fontSize: '14px',
        height: '30px',
        padding: '0 8px',
      },
      medium: {
        fontSize: '16px',
        height: '40px',
        padding: '0 12px',
      },
      large: {
        fontSize: '18px',
        height: '50px',
        padding: '0 16px',
      },
    }
  },
  fontSize: {
    small: '16px',
    medium: '18px',
    large: '24px',
    xlarge: '40px',
    largeIcon: '50px'
  },
}
