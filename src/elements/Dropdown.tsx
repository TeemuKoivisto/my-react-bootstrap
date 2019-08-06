import React from 'react'
import styled from '../theme/styled'
import { FiChevronDown } from 'react-icons/fi'

import useClickOutside from '../hooks/useClickOutside'

type OptionValue = string | number
type Option<T extends OptionValue> = {
  key: string | number
  value: T
}
interface IProps<T extends OptionValue> {
  className?: string
  options: Option<T>[]
  selected?: T
  disabled?: boolean
  required?: boolean
  placeholder?: string
  onSelect: (option: Option<T>) => void
}

DropdownEl.defaultProps = {
  disabled: false,
  required: false,
  placeholder: 'Choose',
}

function DropdownEl<T extends OptionValue>(props: IProps<T>): React.ReactElement<IProps<T>> {
  const { className, selected, options, placeholder } = props

  function closeMenu() {
    setMenuOpen(false)
  }
  function toggleMenu() {
    !props.disabled && setMenuOpen(oldMenuOpen => !oldMenuOpen)
  }
  function isSelected(option: Option<T>) {
    return option.value === selected
  }
  function getButtonText() {
    if (selected) {
      return selected
    }
    return placeholder
  }
  const selectOption = (option: Option<T>) => (e: React.MouseEvent) => {
    e.stopPropagation()
    if (option.value !== selected) {
      props.onSelect(option)
      closeMenu()
    }
  }
  const ref = React.useRef(null)
  const [menuOpen, setMenuOpen] = React.useState(false)
  useClickOutside(ref, (e) => closeMenu(), menuOpen)
  return (
    <div className={className} ref={ref}>
      <Button onClick={toggleMenu} aria-haspopup aria-label="Dropdown menu">
        {getButtonText()} 
        <SvgWrapper><FiChevronDown size={18}/></SvgWrapper>
      </Button>
      <DropdownList open={menuOpen} role="menu">
      { options.map(o =>
        <Option
          key={o.key}
          tabIndex={0}
          selected={isSelected(o)}
          onClick={selectOption(o)}
          role="menuitem"
        >
          {o.value}
        </Option>
      )}
      </DropdownList>
    </div>
  )
}

const SvgWrapper = styled.span`
  display: flex;
`
const Button = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.textDark };
  border-radius: 26px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 8px 12px 8px 16px;
  position: relative;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  & > ${SvgWrapper} {
    margin-left: 6px;
  }
`
type DropdownProps = { open: boolean }
const DropdownList = styled.ul<DropdownProps>`
  background-color: #fff;
  border-width: 1px;
  border-color: #b5b5b5;
  border-style: solid;
  box-shadow: 1px 1px #b5b5b570;
  color: ${({ theme }) => theme.color.textDark };
  display: ${({ open }) => open ? 'block' : 'none'};
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 10;
  transform: scale(1, 1) translateZ(0px);
  transition: opacity 284ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 189ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 0;
  transform-origin: 251px 0px;
`
type OptionProps = { selected: boolean }
const Option = styled.li<OptionProps>`
  align-items: center;
  display: flex;
  background-color: ${({ selected }) => selected ? 'rgba(0, 0, 0, 0.08)' : '#fff'};
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  padding: 10px 12px;
  transition: all 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  z-index: 10;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`
// export const Dropdown = DropdownEl
// TODO fix this, using this component in SC does not work eg ${Dropdown}
export const Dropdown: new <T>() => React.Component<T> = styled(DropdownEl)`
  background: transparent;
  border: 0;
  display: inline-block;
  padding: 0;
  position: relative;
` as any // as React.ComponentType as new <T>() => GenericComponent<T>
