
import React from 'react'
import RowWrapper from './RowWrapper'
import Tile from '../Tile'

const Row = ({ row, onTileClick }) => {
  return (
    <RowWrapper>
      {
        row.map((item, i) => {
          return (
            <Tile
              item={item}
              key={i}
              onTileClick={onTileClick}
              id={i}
            />
          )
        })
      }
    </RowWrapper>
  )
}

export default Row
