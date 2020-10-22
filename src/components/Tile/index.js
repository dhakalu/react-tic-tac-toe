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

  return (
    <TileWrapper
      className={item ? 'rotate' : ''}
      onClick={() => onTileClick(id)}
      role='button'
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      {
        item && <Avatar choice={item}>{item}</Avatar>
      }
    </TileWrapper>
  )
}

export default Tile
