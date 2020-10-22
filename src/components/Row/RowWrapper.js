import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex: 1;
    width: 100vw;
    height: calc(100vh / 3);
    @media (min-width: 1029px) {
        width: 1029px;
    }
    border-bottom: 4px solid #7E7E7E;
    &:last-child {
        border-bottom: 0;
    }
`
