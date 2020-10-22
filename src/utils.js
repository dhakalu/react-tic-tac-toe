
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
  return (isWinner(column1) || isWinner(column2) || isWinner(column3))
}

export const checkIfWineer = (board) => {
  return checkRow(board) || checkColumns(board)
}
