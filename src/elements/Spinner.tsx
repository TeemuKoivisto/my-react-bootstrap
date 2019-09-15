import React from 'react'
import styled, { keyframes } from '../theme/styled'

interface IProps {
  className?: string
  size: 's' | 'm' | 'l'
  color?: string
}

Spinner.defaultProps = {
  size: 'm'
}

export function Spinner(props: IProps) {
  const { className, size, color } = props
  return (
    <StyledSpinner
      className={className}
      size={size}
      color={color}
    />
  )
}

function getSize(size: 's' | 'm' | 'l') {
  switch(size) {
    case 's':
      return {
        borderWidth: '2px',
        height: '14px',
        width: '14px',
      }
    case 'l':
      return {
        borderWidth: '3px',
        height: '20px',
        width: '20px',
      }
    case 'm':
    default:
      return {
        borderWidth: '3px',
        height: '16px',
        width: '16px',
      }
  }
}

const animationRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }  100% {
    transform: rotate(360deg);
  }
`
const StyledSpinner = styled.div<IProps>`
  animation: ${ animationRotate } 0.8s infinite linear;
  border: ${({ theme, color }) => `solid ${color ? theme.color[color] : theme.color.textDark}`};
  border-right-color: transparent;
  border-radius: 50%;
  border-width: ${({ size }) => getSize(size).borderWidth};
  height: ${({ size }) =>  getSize(size).height};
  width: ${({ size }) =>  getSize(size).width};
`
