import * as React from 'react'
import styled from '../theme/styled'

interface IProps {
  children: React.ReactNode
  className?: string
  type?: string
  disabled?: boolean
  onClick?: () => void
}

ButtonEl.defaultProps = {
  type: 'button',
  disabled: false,
}

function ButtonEl(props: IProps) {
  function onClick(e: React.MouseEvent) {
    return !props.disabled && props.onClick && props.onClick()
  }
  const { className, children } = props
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export const Button = styled(ButtonEl)`
  background-color: ${({ theme }) => theme.color.secondary };
  border: 1px solid ${({ theme }) => theme.color.textDark };
  border-radius: 4px;
  color: ${({ theme }) => theme.color.textDark };
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.small };
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 150px;
  &:hover {
    box-shadow: 3px 3px #039be569;
  }
  transition: 0.2s all;
`
