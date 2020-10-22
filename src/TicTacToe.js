import React, { useState, useEffect } from 'react'
import Row from './components/Row'
import { checkIfWineer } from './utils'
import Modal from './components/Modal/Modal'

const TicTacToe = () => {
  const initalBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  const [board, setBoard] = useState(initalBoard)

  const [currentPlayer, setCurrentPlayer] = useState(0)

  const [winner, setWinner] = useState(null)

  useEffect(() => {
    const isWinner = checkIfWineer(board)
    if (isWinner) {
      setWinner(currentPlayer)
    } else {
      setCurrentPlayer((currentPlayer + 1) % 2)
    }
  }, [board])

  const setChoice = (row, column) => {
    const currentBoard = [...board]
    const currentRow = [...currentBoard[row]]
    if (currentRow[column]) return ''
    currentRow[column] = currentPlayer.toString()
    currentBoard[row] = currentRow
    setBoard(currentBoard)
  }

  return (
    <div>
      {
        board.map((row, i) => {
          return (
            <Row
              currentPlayer={currentPlayer}
              onTileClick={(column) => setChoice(i, column)}
              key={i}
              row={row}
            />
          )
        })
      }
      {winner && (
        <Modal>
          <h1>{`Player ${currentPlayer + 1} won the game!`}</h1>
        </Modal>
      )}
    </div>
  )
}

export default TicTacToe
