import React from 'react'
import TileWrapper from './TileWrapper.styles'
import Avatar from './Avatar.styles'

const Tile = ({ item, id, onTileClick }) => {
  return (
    <TileWrapper onClick={() => onTileClick(id)}>
      {
        item && <Avatar choice={item}>{item}</Avatar>
      }
    </TileWrapper>
  )
}

export default Tile
