import { StyledComponentClass } from 'styled-components'

import styled, { keyframes } from '../theme/styled'
import { ITheme, IThemeSizeTypes } from '../interfaces/theme'

export interface ISpinnerProps {
  size: IThemeSizeTypes
  color?: string
}

const animationRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }  100% {
    transform: rotate(360deg);
  }
`

export const Spinner: StyledComponentClass<ISpinnerProps, ITheme> = styled<ISpinnerProps, 'div'>('div')`
  animation: ${ animationRotate } 0.8s infinite linear;
  border: ${({ theme, color }) => `solid ${color ? theme.color[color] : theme.color.textDark}`};
  border-right-color: transparent;
  border-radius: 50%;
  border-width: ${({ theme, size }) => theme.spinner.sizes[size].borderWidth};
  height: ${({ theme, size }) => theme.spinner.sizes[size].height};
  margin: ${({ theme, size }) => theme.spinner.sizes[size].margin};
  width: ${({ theme, size }) => theme.spinner.sizes[size].width};
`
