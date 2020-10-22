import styled from 'styled-components'

const buttonColors = {
  primary: {
    background: 'blue',
    color: '#f0f0f0'
  },
  secondary: '',
  distroy: {
    background: 'red',
    color: '#f0f0f0'
  }
}

export const Button = styled.button`
outline: none;
cursor: pointer;
color: ${props => buttonColors[props.type || 'primary'].color};
background:  ${props => buttonColors[props.type || 'primary'].background};
border-radius: 4px;
    border: 0;
    line-height: 2.5rem;
    padding: 0 2.1rem;
    font-size: 17px;
&:not(:last-child){
    margin-right: 10px;
}
`

export default styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #f0f0f0;

    .actions {
        display: flex;
    }

    & > div {
        padding: 20px;
    }

`
