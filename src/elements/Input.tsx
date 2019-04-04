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
  placeHolder?: string
  required?: boolean
  onChange: (value: any) => void // Basically one of: string | number | file
}
interface IWrapperProps {
  fullWidth?: boolean
}

class InputClass extends React.PureComponent<IProps> {

  public static defaultProps: Pick<IProps, 'disabled' | 'type' | 'required'> = {
    disabled: false,
    type: 'text',
    required: false
  }
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !this.props.disabled && this.props.onChange!(event.target.value)
  }
  render() {
    const { icon } = this.props
    return (
      <InputContainer fullWidth={this.props.fullWidth}>
        { icon }
        <StyledInput {...this.props} onChange={this.onChange}/>
      </InputContainer>
    )
  }
}

const InputContainer = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.textDark };
  border-radius: 4px;
  display: flex;
  position: relative;
  width: ${({ fullWidth } : IWrapperProps) => fullWidth ? '100%' : '180px' };
  &:focus {
    background-image: linear-gradient(to right, #cefff8, #729EE74D);
    color: ${({ theme }) => theme.color.textDark };
    outline: auto 5px;
  }
  & > svg {
    left: 8px;
    position: absolute;
  }
`
const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.color.white };
  border: 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.textDark };
  font-size: ${({ theme }) => theme.fontSize.small };
  padding: 0.5rem 0.5rem;
  padding-left: ${({ iconPadding } : IProps) => iconPadding || ''};
  text-decoration: none;
  transition: 0.1s all;
  width: 100%;
  &:focus {
    background-image: linear-gradient(to right,#fcffff,#e6f8ff4d);
    color: ${({ theme }) => theme.color.textDark };
  }
`
export const Input = styled(InputClass)``
