import React from 'react'
import ModalStyles, { Button } from './Modal.styles'

const Modal = ({ children, actions = [] }) => {
  return (
    <ModalStyles>
      <div>
        <div>
          {children}
        </div>
        <div className='actions'>
          {
            actions.map((action, i) => {
              return (
                <Button
                  className='action-button'
                  key={i}
                  type={action.type || 'primary'}
                  onClick={action.handleButtonClick}
                >
                  {action.label}
                </Button>
              )
            })
          }
        </div>
      </div>
    </ModalStyles>
  )
}

export default Modal
