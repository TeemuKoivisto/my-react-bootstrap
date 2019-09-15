import React, { useState } from 'react'
import { inject } from 'mobx-react'
import styled from '../theme/styled'

import { ExampleModal } from '../modals/ExampleModal'

import { Dropdown } from '../elements/Dropdown'
import { Input } from '../elements/Input'
import { Button } from '../elements/Button'

import { ToastStore } from '../stores/ToastStore'

interface IProps {
  toastStore?: ToastStore
}
export const ShowcaseComponents = inject('toastStore')(function ShowcaseComponents(props: IProps) {
  function handleSelect(option: { key: string | number, value: string }) {
    toastStore!.createToast('You selected something', 'warning')
    setSelectedOption(option.value)
  }
  function handleTextChange(val: any) {
    setText(val)
  }
  function handleModalOpen() {
    toastStore!.createToast('You opened modal')
    setModalOpen(true)
  }
  function handleModalClose() {
    toastStore!.createToast('You closed modal', 'info')
    setModalOpen(false)
  }
  const { toastStore } = props
  const [selectedOption, setSelectedOption] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [text, setText] = useState('')
  const dropdownOptions = [
    { key: 'a', value: 'Option1'},
    { key: 'b', value: 'Option2'},
    { key: 'c', value: 'Option3'},
  ]
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
        <Button onClick={handleModalOpen}>Open modal</Button>
        <br/>
        <Button loading>Loading</Button>
      </Container>
    </>
  )
})

const Container = styled.div`
  height: 800px;
  & > ${Input} {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`
