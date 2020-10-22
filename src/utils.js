
const isWinner = (items) => {
  const [a, b, c] = items
  if (!a || !b || !c) return false
  return a === b && b === c && c === a
}

const checkRow = (board) => {
  return isWinner(board[0]) || isWinner(board[1]) || isWinner(board[2])
}

const checkColumns = (board) => {
  const column1 = [board[0][0], board[1][0], board[2][0]]
  const column2 = [board[0][1], board[1][1], board[2][1]]
  const column3 = [board[0][2], board[1][2], board[2][2]]
  return isWinner(column1) || isWinner(column2) || isWinner(column3)
}

const checkDiagonal = (board) => {
  const diagonal1 = [board[0][0], board[1][1], board[2][2]]
  const diagonal2 = [board[0][2], board[1][1], board[2][0]]
  return isWinner(diagonal1) || isWinner(diagonal2)
}

export const checkIfWineer = (board) => {
  const isWinner = checkRow(board) || checkColumns(board) || checkDiagonal(board)
  let isDeadlock = false
  if (!isWinner) {
    let nonZero = 0
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        if (board[i][j]) {
          nonZero += 1
        }
      }
    }
    console.log(nonZero)
    isDeadlock = nonZero >= 9
  }
  return {
    isWinner,
    isDeadlock
  }
}

const emptyTileFilder = (acc = [], currentValue, currentIndex) => {
  if (!currentValue) acc.push(currentIndex)
  return acc
}

const getPositionFromIndex = index => {
  const row = Math.floor(index / 3)
  const column = Math.floor(index % 3)
  return {
    row,
    column
  }
}

const findOne = (possbile, desireable) => {
  desireable.forEach((v) => {
    if (possbile.indexOf(v) >= 0) {
      return v
    };
  })
  return -1
}

export const dumbMove = (board) => {
  const flatBoard = [...board[0], ...board[1], ...board[2]]
  const emptySpots = flatBoard.reduce(emptyTileFilder, [])
  if (emptySpots.includes(4)) { // if center is available take it
    return getPositionFromIndex(4)
  } else { // if edges are available take it
    const availableEdge = findOne(emptySpots, [0, 2, 6, 8])
    if (availableEdge + 1) {
      return getPositionFromIndex(availableEdge)
    }
  }
  const randomIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)]
  return getPositionFromIndex(randomIndex)
}
