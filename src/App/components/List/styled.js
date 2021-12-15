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
`;

export const VideoButton = styled.button`
    ${({ theme }) => css` 
        color: ${theme.dark};
        border: 0;
        background-color: ${theme.secondary};
        font-size: 20px;
        padding: 10px;
        transition: 0.2s;
        text-shadow: 0 0 2px ${colorAlpha(theme.dark, 0.7)};
        margin-bottom: 10px;
        cursor: pointer;
        border-radius: 10px;
        &:hover {
            transform: scale(1.05);
            filter: brightness(1.5);
            box-shadow: 0 0 10px ${colorAlpha(theme.secondary, 0.7)};
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
`;