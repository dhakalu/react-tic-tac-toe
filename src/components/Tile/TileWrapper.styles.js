import styled from 'styled-components'

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

    border-bottom: 1px solid #7E7E7E;
    &:nth-child(2){
      border-left: 1px solid #7E7E7E;
      border-right: 1px solid #7E7E7E;
    }
`
