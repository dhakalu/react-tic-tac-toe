import React from 'react'
import TileWrapper from './TileWrapper.styles'
import Avatar from './Avatar.styles'

const ENTER_CHAR_CODE = 13

const Tile = ({ item, rowId, columnId, onTileClick, invalidMoveMessage, invalidMovePosition }) => {
  const handleKeyPress = (event) => {
    if (event.charCode === ENTER_CHAR_CODE) {
      onTileClick(rowId, columnId)
    }
  }

  const classNames = []

  if (item) {
    classNames.push(item === '0' ? 'first' : 'second')
  }
  return (
    <TileWrapper
      className={classNames.join(' ')}
      onClick={() => onTileClick(rowId, columnId)}
      role='button'
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      <div>
        {
          item && <Avatar choice={item}>{item === '0' ? 'O' : 'X'}</Avatar>
        }
        {
          invalidMovePosition && invalidMovePosition[0] === rowId && invalidMovePosition[1] === columnId && (
            <div className='error-message'>
              {invalidMoveMessage}
            </div>
          )
        }
      </div>
    </TileWrapper>
  )
}

export default Tile
