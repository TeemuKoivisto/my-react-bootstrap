import { ITheme } from '../types/theme'

export const defaultTheme : ITheme = {
  color: {
    bg: '#fff',
    gray: '#aaa',
    grayLight: '#eee',
    primary: '#1d9eff',
    green: '#5B9C2D',
    blue: '#425EC2',
    red: '#ff5d5d',
    orange: '#EF7F00',
    secondary: '#ebf6ff',
    textLight: '#666',
    textDark: '#222',
    white: '#fff',
    yellow: 'yellow',
  },
  spinner: {
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
  },
  button: {
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
  },
  fontSize: {
    small: '16px',
    medium: '18px',
    large: '24px',
    xlarge: '40px',
    largeIcon: '50px'
  },
  font: {
    text: '\'Raleway\', sans-serif',
  },
  transitions: {
    bezier: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  }
}
