import React, { useState } from 'react'
import styled from '../theme/styled'

import { ExampleModal } from '../modals/ExampleModal'

import { Dropdown } from '../elements/Dropdown'
import { Input } from '../elements/Input'
import { Button } from '../elements/Button'

interface IProps {}
export function ShowcaseComponents(props: IProps) {
  function handleSelect(option: { key: string | number, value: string }) {
    setSelectedOption(option.value)
  }
  function handleTextChange(val: any) {
    setText(val)
  }
  function handleModalClose() {
    setModalOpen(false)
  }
  const [selectedOption, setSelectedOption] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [text, setText] = useState('')
  const dropdownOptions = [{ key: 'a', value: 'Option1'}, { key: 'b', value: 'Option2'}]
  return (
    <>
      <ExampleModal isOpen={modalOpen} onClose={handleModalClose}/>
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
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
      </Container>
    </>
  )
}

const Container = styled.div`
  & > ${Input} {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`
