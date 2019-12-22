import * as React from 'react'
import styled from '../theme/styled'

interface IProps {
  className?: string
  value?: string | number
  type?: 'email' | 'password' | 'text' | 'number' | 'textarea'
  icon?: React.ReactNode
  iconPadding?: string
  fullWidth?: boolean
  disabled?: boolean
  placeholder?: string
  required?: boolean
  onChange: (value: any) => void // Basically one of: string | number | file
  onFocus?: () => void
  onBlur?: () => void
}

InputEl.defaultProps = {
  required: false,
  type: 'text',
  disabled: false,
}

function InputEl(props: IProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    !disabled && props.onChange!(event.target.value)
  }
  const {
    className, value, type, icon, iconPadding, placeholder, disabled, required, fullWidth, onFocus, onBlur
  } = props
  return (
    <Container className={className} fullWidth={fullWidth}>
      { icon }
      { type === 'textarea' ?
        <StyledTextarea
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        :
        <StyledInput
          value={value}
          type={type}
          iconPadding={iconPadding}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      }
    </Container>
  )
}

type ContainerProps = { fullWidth?: boolean }
const Container = styled.div<ContainerProps>`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.textDark};
  border-radius: 4px;
  display: flex;
  position: relative;
  width: ${({ fullWidth }) => fullWidth ? '100%' : '180px'};
  &:focus {
    background-image: linear-gradient(to right, #cefff8, #729EE74D);
    color: ${({ theme }) => theme.color.textDark};
    outline: auto 5px;
  }
  & > svg {
    left: 8px;
    position: absolute;
  }
`
const StyledTextarea = styled.textarea`
  border: 0;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  height: 100%;
  min-height: 100px;
  padding: 0.5rem;
  width: 100%;
`
const StyledInput = styled.input<IProps>`
  background-color: ${({ theme }) => theme.color.white};
  border: 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.textDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 0.5rem 0.5rem;
  padding-left: ${({ iconPadding }) => iconPadding || ''};
  text-decoration: none;
  transition: 0.1s all;
  width: 100%;
  &:focus {
    background-image: linear-gradient(to right,#fcffff,#e6f8ff4d);
    color: ${({ theme }) => theme.color.textDark};
  }
`
export const Input = styled(InputEl)``
