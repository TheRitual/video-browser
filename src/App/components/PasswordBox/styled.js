import colorAlpha from "color-alpha";
import styled, { css } from "styled-components";

export const ShadowBox = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ${({ hidden }) => css`
        background-color: ${hidden ? '#00000000' : '#000000AA'};
    `}}}
`;

export const PassBox = styled.section`
    left: 5%;
    right: 5%;
    top: 5%;
    bottom: 5%;
    border-radius: 30px;
    border: 3px #000 solid;
    position: fixed;
    background-image: url('./background_p.jpg');
    background-size: cover;
    background-position: center;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const InputBox = styled.div`
${({ theme }) => css`
    width: 30vw;
    height: 70vh;
    border: 3px solid ${theme.dark};
    border-radius: 30px;
    background-color: ${colorAlpha(theme.dark, 0.7)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`}}}    
`;

export const InputField = styled.input`
${({ theme }) => css`
        background-color: ${theme.light};
        border: 3px solid ${theme.secondary};
        padding: 15px;
        font-size: 5vh;
        border-radius: 10px;
        margin: 3vh;
        color: ${theme.dark};
        text-align: center;
        line-height: 7vh;
        width: 27vw;
`}}}
`

export const EnterButton = styled.button`
${({ theme }) => css`
        color: ${theme.dark};
        margin: 3vh;
        border: 0;
        background-color: ${theme.secondary};
        font-size: 30px;
        padding: 3vh;
        transition: 0.2s;
        text-shadow: 0 0 2px ${colorAlpha(theme.dark, 0.7)};
        cursor: pointer;
        border-radius: 10px;
        &:hover {
            transform: scale(1.05);
            filter: brightness(1.5);
            box-shadow: 0 0 10px ${colorAlpha(theme.secondary, 0.7)};
        }
        @media(orientation: portrait) {
            font-size: 3vh;
            padding: 2vh;
        }
`}}}
`

export const ErrorInformation = styled.span`
    ${({ theme }) => css`
        color: ${theme.error};
        text-shadow: 0 0 2px ${colorAlpha(theme.secondary, 0.7)};
        font-size: 6vh;
`}}}
`