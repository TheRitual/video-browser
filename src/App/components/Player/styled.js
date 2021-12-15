import styled, { css } from "styled-components";

export const PlayerContainer = styled.section`
    flex: 1;
    ${({ theme }) => css`
        background-color: ${theme.dark};
        color: ${theme.light};
    `};
`;