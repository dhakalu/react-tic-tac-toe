
import React from 'react'
import RowWrapper from './RowWrapper'
import Tile from '../Tile'

const Row = ({ row, rowId, onTileClick, invalidMoveMessage, invalidMovePosition }) => {
  return (
    <RowWrapper>
      {
        row.map((column, i) => {
          return (
            <Tile
              key={i}
              rowId={rowId}
              item={column}
              onTileClick={onTileClick}
              columnId={i}
              invalidMoveMessage={invalidMoveMessage}
              invalidMovePosition={invalidMovePosition}
            />
          )
        })
      }
    </RowWrapper>
  )
}

export default Row
