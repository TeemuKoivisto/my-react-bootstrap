import React, { useState } from 'react'
import styled from '../theme/styled'

// import { Button } from '../elements/Button'
import { Dropdown } from '../elements/Dropdown'
import { Input } from '../elements/Input'

interface IProps {}
export function ShowcaseComponents(props: IProps) {
  function handleSelect(option: { key: string | number, value: string }) {
    setSelectedOption(option.value)
  }
  function handleTextChange(val: any) {
    setText(val)
  }
  const [selectedOption, setSelectedOption] = useState('')
  const [text, setText] = useState('')
  const dropdownOptions = [{ key: 'a', value: 'Option1'}, { key: 'b', value: 'Option2'}]
  return (
    <Container>
      <Dropdown
        options={dropdownOptions}
        selected={selectedOption}
        onSelect={handleSelect}
      />
      <Input
        type="textarea"
        placeholder="Write text"
        fullWidth
        value={text}
        onChange={handleTextChange}
      />
    </Container>
  )
}

const Container = styled.div`
  & > ${Input} {
    margin-top: 15px;
  }
`
