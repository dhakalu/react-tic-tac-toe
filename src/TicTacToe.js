import React, { useReducer } from 'react'
import Row from './components/Row'
import { checkIfWineer } from './utils'
import Modal from './components/Modal/Modal'

const SET_CHOICE = 'setChoice'
const SET_DEAD_LOCK = 'setDeadlock'
const SET_CURRENT_PLAYER = 'setCurrentPlayer'
const SET_WINNDER = 'setWinner'
const RESTART = 'restat'

const initalBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const initialState = {
  board: initalBoard,
  winner: '',
  currentPlayer: 1,
  deadlock: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CHOICE: {
      const { row, column } = action
      const currentBoard = [...state.board]
      const currentRow = [...currentBoard[row]]
      if (currentRow[column]) return ''
      currentRow[column] = `${state.currentPlayer}`
      currentBoard[row] = currentRow
      const {
        isWinner,
        isDeadlock
      } = checkIfWineer(currentBoard)
      return {
        ...state,
        board: currentBoard,
        winner: isWinner ? state.currentPlayer : '',
        deadlock: isDeadlock,
        currentPlayer: (state.currentPlayer + 1) % 2
      }
    }
    case SET_DEAD_LOCK: {
      return {
        ...state,
        deadlock: action.deadlock
      }
    }
    case SET_CURRENT_PLAYER: {
      return {
        ...state,
        currentPlayer: action.currentPlayer
      }
    }
    case SET_WINNDER: {
      return {
        ...state,
        winner: action.winner
      }
    }
    case RESTART: {
      return initialState
    }
    default:
      throw new Error()
  }
}

const TicTacToe = ({ mode, onEndGame = () => false }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { board, winner, deadlock, currentPlayer } = state

  const restart = () => dispatch({ type: RESTART })

  const setChoice = (row, column) => {
    dispatch({
      type: SET_CHOICE,
      row,
      column
    })
  }

  const modalActions = [
    {
      label: 'Restart',
      handleButtonClick: () => restart()
    },
    {
      label: 'End Game',
      type: 'distroy',
      handleButtonClick: () => onEndGame()
    }
  ]

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
        <Modal actions={modalActions}>
          <h1>Winner!</h1>
          <p>
            Player {currentPlayer} won this game!! <strong>congratulations!!</strong>
          </p>
        </Modal>
      )}
      {deadlock && (
        <Modal actions={modalActions}>
          <h1>Draw!</h1>
          <p>
              No one can win this game
          </p>
        </Modal>
      )}
    </div>
  )
}

export default TicTacToe
