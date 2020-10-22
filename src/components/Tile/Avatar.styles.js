import styled from 'styled-components' 

const backgroundColors = {
    none: '#fff',
    0: 'green',
    1: 'red'
  }

export default styled.div`
    font-size: 72px;
    background-color: ${props => backgroundColors[props.choice || 'none']};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    color: #fff;
`
