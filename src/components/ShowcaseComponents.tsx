import React, { useState } from 'react'
import styled from '../theme/styled'

// import { Button } from '../elements/Button'
import { Dropdown } from '../elements/Dropdown'

interface IProps {}
export function ShowcaseComponents(props: IProps) {
  function handleSelect(option: { key: string | number, value: string }) {
    setSelectedOption(option.value)
  }
  const [selectedOption, setSelectedOption] = useState('')
  const dropdownOptions = [{ key: 'a', value: 'Option1'}, { key: 'b', value: 'Option2'}]
  return (
    <Container>
      <Dropdown
        options={dropdownOptions}
        selected={selectedOption}
        onSelect={handleSelect}
      />
    </Container>
  )
}

const Container = styled.div`
`
