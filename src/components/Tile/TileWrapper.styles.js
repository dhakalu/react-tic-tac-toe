import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
0% {
  transform: rotateY(0deg);
  background-color: blue;
}
100% {
  rotateY(180deg);
  background-color: green;
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
        background-color: #000;
        cursor: pointer;
    }

    outline: none;
    
    &:nth-child(2){
      border-left: 4px solid #7E7E7E;
      border-right: 4px solid #7E7E7E;
    }

    
    transition: transform 0.6s;
    transition: background-color 0.6s;
    transform-style: preserve-3d;
    &.rotate{
      transform: rotateY(180deg);
    }

    &.first{
      background-color: green;
    }

    &.second {
      background-color: red;
    }
`
