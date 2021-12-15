import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
        -webkit-font-smoothing: inherit;
    }

    :root {
        color-scheme: dark;
    }

    body {
        font-family: 'Lobster', cursive;
        margin: 0;
        font-size: 18px;
        letter-spacing: 0.05em;
    }
`

export default GlobalStyle;