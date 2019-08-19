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
  fontSize: {
    small: '14px',
    medium: '16px',
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
