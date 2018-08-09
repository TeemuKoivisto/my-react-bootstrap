import { ITheme } from '../interfaces/theme'

export const defaultTheme : ITheme = {
  color: {
    textLight: '#666',
    textDark: '#222',
    bg: '#fff',
    white: '#fff',
    primary: '#2979FF',
    secondary: '#82B1FF'
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
