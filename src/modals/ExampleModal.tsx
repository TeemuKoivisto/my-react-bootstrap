import React, { useRef } from 'react'
import styled from '../theme/styled'
import { FiX } from 'react-icons/fi'

import useClickOutside from '../hooks/useClickOutside'
import useScrollLock from '../hooks/useScrollLock'

import { Modal } from '../elements/Modal'
import { Button } from '../elements/Button'

interface IProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}
export function ExampleModal(props: IProps) {
  const { className, isOpen } = props
  function handleClose() {
    props.onClose()
  }
  function doStuff() {
  }
  const ref = useRef(null)
  useClickOutside(ref, (e) => handleClose(), isOpen)
  useScrollLock(isOpen)
  return (
    <Modal className={className}
      isOpen={isOpen}
      body={
        <ModalContainer ref={ref}>
          <SvgAction className="close-icon" onClick={() => handleClose()}><FiX size={24}/></SvgAction>
          <SvgWrapper><img src={'/img/grumpy-cat.jpg'} alt="Grumpy cat"/></SvgWrapper>
          <h2>I am a modal</h2>
          <Button onClick={doStuff}>I am a button</Button>
        </ModalContainer>
      }
    ></Modal>
  )
}

const ModalContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  padding: 20px;
  text-align: center;
  width: calc(100% - 20px);
  .close-icon {
    align-self: flex-end;
    position: relative;
    right: -5px; // Move the icon a little closer the border than the 20px padding allows to look nicer
    top: -5px;
  }
  & > h2 {
    font-size: 20px;
    font-weight: 500;
    margin: 30px 0 30px 0;
    padding: 0;
  }
`
const SvgWrapper = styled.span`
  display: flex;
  & > img {
    width: 100%;
  }
`
const SvgAction = styled.button`
  background: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  padding: 8px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`
