import React, { useState } from 'react'
import Wrapper from './Wrapper.styles'
import TicTacToe from './TicTacToe'
import Modal from './components/Modal/Modal'

// todo move to own constants file and remove duplication from TicTacToe.js
export const MODES = {
  TWO_PLAYERS: '2',
  COMPUTER: 'computer'
}
const App = () => {
  const [mode, setMode] = useState('')

  const handleEndGame = () => {
    setMode('')
  }

  const modalActions = [
    {
      label: '2 Players',
      handleButtonClick: () => setMode(MODES.TWO_PLAYERS)
    },
    {
      label: 'Aagainst Computer',
      handleButtonClick: () => {
        setMode(MODES.COMPUTER)
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
