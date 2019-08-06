export interface IThemeColor {
  gray: string
  grayLight: string
  green: string
  orange: string
  blue: string
  textLight: string
  textDark: string
  bg: string
  white: string
  primary: string
  secondary: string
  red: string
  yellow: string
}

export interface ISize {
  borderWidth?: string
  fontSize?: string
  height?: string
  margin?: string
  padding?: string
  width?: string
}

export type ThemeSizeTypes = 'small' | 'medium' | 'large'

export interface IThemeSizes {
  small: ISize
  medium: ISize
  large: ISize
}

export interface ITheme {
  color: IThemeColor
  button: IThemeSizes
  spinner: IThemeSizes
  font: {
    text: string
  }
  fontSize: {
    small: string
    large: string
    medium: string
    xlarge: string
    largeIcon: string
  }
  transitions: {
    bezier: string
  }
}
