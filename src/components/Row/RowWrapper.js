import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex: 1;
    width: 100vw;
    height: calc(100vh / 3);
    max-width: 768px;
    @media (min-width: 1029px) {
        width: 1029px;
    }

    @media (max-width: 320px) {
        height: calc(320px / 3);
    }

    @media (max-width: 375px) {
        height: calc(375px / 3);
    }

    border-bottom: 4px solid #7E7E7E;
    &:last-child {
        border-bottom: 0;
    }
`
