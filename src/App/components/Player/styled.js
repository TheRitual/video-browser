import colorAlpha from "color-alpha";
import styled, { css } from "styled-components";

export const PlayerContainer = styled.section`
    flex: 1;
    ${({ theme }) => css`
        background-color: ${theme.dark};
        color: ${theme.light};
        background-image: url('./background.jpg');
        background-size: cover;
    `};
    @media(orientation: portrait) {
        height: calc(100vh / 16 * 9);
        flex: auto;
    }
`;

export const Dummy = styled.div`
    width: 100%;
    height: 100%;
`;

export const Title = styled.h2`
    position: absolute;
    z-index: 2;
    font-size: 30px;
    margin: 0;
    padding: 10px;
    padding-left: 30px;
    text-align: center;
    ${({ theme }) => css` 
        color: ${colorAlpha(theme.accent, 0.1)};
        &:hover {
            color: ${colorAlpha(theme.accent, 0.7)};
            cursor: pointer;
        }
    `};
    cursor: default;
`;