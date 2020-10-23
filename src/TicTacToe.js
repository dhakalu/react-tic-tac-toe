import React, { useEffect, useReducer } from 'react'
import Row from './components/Row'
import { checkIfWineer, dumbMove } from './utils'
import Modal from './components/Modal/Modal'

const SET_CHOICE = 'setChoice'
const SET_DEAD_LOCK = 'setDeadlock'
const SET_CURRENT_PLAYER = 'setCurrentPlayer'
const SET_WINNDER = 'setWinner'
const RESTART = 'restat'
const INVALID_CLICK = 'setInvalidClick'
const SET_PAYER_NAMES = 'setPayerNames'
const SET_WIN_DIALOGUE = 'setResultDialogue'

const initalBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const initialState = {
  board: initalBoard,
  winner: '',
  currentPlayer: 0,
  deadlock: false,
  invalidMoveMessage: '',
  invalidMovePosition: [-1, -1],
  resultTitle: '',
  resultMessage: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CHOICE: {
      const { row, column } = action
      const currentBoard = [...state.board]
      const currentRow = [...currentBoard[row]]
      if (currentRow[column]) {
        return {
          ...state,
          invalidMoveMessage: 'Already Taken',
          invalidMovePosition: [row, column]
        }
      }
      currentRow[column] = `${state.currentPlayer}`
      currentBoard[row] = currentRow
      const {
        isWinner,
        isDeadlock
      } = checkIfWineer(currentBoard)
      return {
        ...state,
        board: currentBoard,
        winner: isWinner ? `${state.currentPlayer}` : '',
        deadlock: isDeadlock,
        currentPlayer: (isWinner || isDeadlock) ? state.currentPlayer : (state.currentPlayer + 1) % 2,
        invalidMoveMessage: '',
        invalidMovePosition: [-1, -1]
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
      return {
        ...initialState
      }
    }
    case INVALID_CLICK: {
      const { row, column, message } = action
      return {
        ...state,
        invalidMoveMessage: message,
        invalidMovePosition: [row, column]
      }
    }
    case SET_PAYER_NAMES: {
      return {
        ...state,
        playerNames: action.names
      }
    }
    case SET_WIN_DIALOGUE: {
      return {
        ...state,
        resultTitle: action.title,
        resultMessage: action.message
      }
    }
    default:
      throw new Error()
  }
}

const TicTacToe = ({ mode, onEndGame = () => false }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const {
    board,
    winner,
    deadlock,
    currentPlayer,
    invalidMoveMessage,
    invalidMovePosition,
    resultTitle,
    resultMessage,
    playerNames = {}
  } = state

  useEffect(() => {
    if (mode === MODES.COMPUTER &&
        currentPlayer === 1) {
      const { row, column } = dumbMove(board)
      setTimeout(() => {
        setChoice(row, column)
      }, 1000)
    }
    // eslint-disable-next-line
  }, [currentPlayer])

  useEffect(() => {
    if (mode === MODES.COMPUTER) {
      setPlayerNames('Player', 'Computer')
    } else {
      setPlayerNames('Player 0', 'Player 1')
    }
  }, [mode])

  useEffect(() => {
    let title = ''
    let message = ''
    if (mode === MODES.COMPUTER && currentPlayer === 1 && winner) {
      title = 'You lost!'
      message = 'Opps, Try agein!'
    } else if (mode === MODES.COMPUTER && currentPlayer === 0 && winner) {
      title = 'You won!'
      message = 'Congratulations!'
    } else if (winner) {
      title = `${playerNames[currentPlayer] || `Player ${currentPlayer}`} won!`
      message = 'Congrationations!'
    }
    setTimeout(() => {
      dispatch({
        type: SET_WIN_DIALOGUE,
        title,
        message
      })
    }, 500)
    // eslint-disable-next-line
  }, [winner])

  useEffect(() => {
    if (deadlock) {
      setTimeout(() => {
        dispatch({
          type: SET_WIN_DIALOGUE,
          title: 'Draw!',
          message: 'No one could win this game!'
        })
      }, 500)
    }
  }, [deadlock])

  const setPlayerNames = (firstPlayerName, secondPlayerName) => dispatch({
    type: SET_PAYER_NAMES,
    names: {
      0: firstPlayerName,
      1: secondPlayerName
    }
  })

  const restart = () => dispatch({ type: RESTART })

  const setChoice = (row, column) => dispatch({
    type: SET_CHOICE,
    row,
    column
  })

  const setInvalidClick = (row, column, message) => dispatch({
    type: INVALID_CLICK,
    message,
    row,
    column
  })

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

  const handleTileClick = (row, column) => {
    if (mode === MODES.COMPUTER && currentPlayer === 1) {
      setInvalidClick(row, column, 'Wait for turn')
    } else {
      setChoice(row, column)
    }
  }

  return (
    <div>
      {
        board.map((row, i) => {
          return (
            <Row
              key={i}
              rowId={i}
              row={row}
              currentPlayer={currentPlayer}
              onTileClick={handleTileClick}
              invalidMoveMessage={invalidMoveMessage}
              invalidMovePosition={invalidMovePosition}
            />
          )
        })
      }
      {resultTitle && (
        <Modal actions={modalActions}>
          <h1>{resultTitle}</h1>
          <p>
            <strong>{resultMessage}</strong>
          </p>
        </Modal>
      )}
    </div>
  )
}

export default TicTacToe

export const MODES = {
  TWO_PLAYERS: 'humanToHuman',
  COMPUTER: 'computer'
}
