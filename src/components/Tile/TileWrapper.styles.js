import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
  transform: rotateY(0deg);
}
to {
  rotateY(180deg);
}
`
export default styled.div`
    flex: 1;
    min-width: 33.33%;
    min-height: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222222;
    &:hover {
        background-color: #7E7E7E;
        cursor: pointer;
    }

    &:nth-child(2){
      border-left: 4px solid #7E7E7E;
      border-right: 4px solid #7E7E7E;
    }

  &.rotate{
    animation: ${rotate} 1s;
  }
`
