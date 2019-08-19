import React from 'react'
import styled from '../theme/styled'

interface IProps {
  className?: string
  isOpen: boolean
  body: React.ReactNode
}

function ModalEl(props: IProps) {
  const { className, isOpen, body } = props
  return (
    <div className={`${className} ${!isOpen && 'hidden'}`} role="dialog" aria-modal aria-hidden={!isOpen}>
      { body }
    </div>
  )
}

export const Modal = styled(ModalEl)`
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
  bottom: 0;
  display: flex;
  left: 0;
  justify-content: center;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  &.hidden {
    display: none;
    visibility: hidden;
  }
`
