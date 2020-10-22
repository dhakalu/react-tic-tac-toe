import React from 'react'
import TileWrapper from './TileWrapper.styles'
import Avatar from './Avatar.styles'

const ENTER_CHAR_CODE = 13

const Tile = ({ item, id, onTileClick }) => {
  const handleKeyPress = (event) => {
    if (event.charCode === ENTER_CHAR_CODE) {
      onTileClick(id)
    }
  }

  const classNames = []

  if (item) {
    classNames.push(item === '0' ? 'first' : 'second')
  }
  return (
    <TileWrapper
      className={classNames.join(' ')}
      onClick={() => onTileClick(id)}
      role='button'
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      <div>
        {
          item && <Avatar choice={item}>{item}</Avatar>
        }
      </div>
    </TileWrapper>
  )
}

export default Tile
