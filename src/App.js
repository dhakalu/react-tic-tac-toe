import React, { useState } from 'react'
import Wrapper from './Wrapper.styles'
import TicTacToe from './TicTacToe'
import Modal from './components/Modal/Modal'

const MODES = {
  TWO_PLAYERS: '2',
  COMPUTER: 'computer'
}

const App = () => {
  const [mode, setMode] = useState('')

  const handleEndGame = () => {
    alert('Are you sure you want to end game?')
    setMode('')
  }

  const modalActions = [
    {
      label: '2 Players',
      handleButtonClick: () => setMode(MODES.TWO_PLAYERS)
    },
    {
      label: '1 Player (against computer)',
      handleButtonClick: () => {
        // setMode(MODES.COMPUTER)
        window.alert('This mode is not implemented yet.')
      }
    }
  ]

  return (
    <Wrapper>
      {
        !mode ? (
          <Modal actions={modalActions}>
            <h1>Welcome!</h1>
            <p>
            Select a mode to start a new game:
            </p>
          </Modal>
        ) : (
          <TicTacToe
            mode={mode}
            onEndGame={handleEndGame}
          />
        )
      }
    </Wrapper>
  )
}

export default App
