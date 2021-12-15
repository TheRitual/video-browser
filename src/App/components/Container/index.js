import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    @media(orientation: portrait) {
        flex-direction: column;
        height: auto;
    }
`;

export default Container;