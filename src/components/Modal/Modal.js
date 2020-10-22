import React from 'react'
import ModalStyles from './Modal.styles'

const Modal = ({ children }) => {
  return (
    <ModalStyles>
      {children}
    </ModalStyles>
  )
}

export default Modal
