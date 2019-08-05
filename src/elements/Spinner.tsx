import styled, { keyframes } from '../theme/styled'
import { ThemeSizeTypes } from '../types/theme'

export interface ISpinnerProps {
  size: ThemeSizeTypes
  color?: string
}

const animationRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<ISpinnerProps>`
  animation: ${ animationRotate } 0.8s infinite linear;
  border: ${({ theme, color }) => `solid ${color ? theme.color[color] : theme.color.textDark}`};
  border-right-color: transparent;
  border-radius: 50%;
  border-width: ${({ theme, size }) => theme.spinner[size].borderWidth};
  height: ${({ theme, size }) => theme.spinner[size].height};
  margin: ${({ theme, size }) => theme.spinner[size].margin};
  width: ${({ theme, size }) => theme.spinner[size].width};
`
