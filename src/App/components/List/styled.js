import styled, { css } from "styled-components";
import colorAlpha from "color-alpha";

export const Menu = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    ${({ theme }) => css`
        background-color: ${theme.dark};
        color: ${theme.light};
    `};
    @media(orientation: portrait) {
        flex-direction: column;
        height: auto;
        min-height: 50vh;
        width: 100%;
    }
`;

export const Title = styled.h2`
    font-size: 40px;
    margin: 0;
    padding: 0;
    text-align: center;
    ${({ theme }) => css` 
        color: ${theme.light};
        text-shadow: 0 0 20px ${colorAlpha(theme.secondary, 0.7)};
    `};
    cursor: default;
    @media(orientation: portrait) {
            font-size: 4vh;
        }
`;

export const VideoButton = styled.button`
    ${({ theme, active }) => css` 
        color: ${active ? theme.light : theme.dark};
        border: 0;
        background-color: ${active ? theme.primary : theme.secondary};
        font-size: 20px;
        padding: 10px;
        transition: 0.2s;
        text-shadow: 0 0 2px ${colorAlpha(active ? theme.light : theme.dark, 0.7)};
        margin-bottom: 10px;
        cursor: pointer;
        border-radius: 10px;
        &:hover {
            transform: scale(1.05);
            filter: brightness(1.5);
            box-shadow: 0 0 10px ${colorAlpha(active ? theme.primary : theme.secondary, 0.7)};
        }
        @media(orientation: portrait) {
            font-size: 3vh;
            padding: 2vh;
        }
    `};
`;

export const ButtonContainer = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: dark; 
    @media(orientation: portrait) {
        flex-direction: column;
        height: auto;
        min-height: 50vh;
        width: 100%;
        overflow-y: auto;
    }
`;