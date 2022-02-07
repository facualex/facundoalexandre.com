import { createGlobalStyle } from "styled-components";
import { theme } from './config/theme'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: "border-box" !important;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${theme.colors.background};
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;