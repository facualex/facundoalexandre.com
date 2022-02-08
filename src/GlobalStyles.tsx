import { createGlobalStyle } from "styled-components";
import { theme } from './config/theme'
import hexToRGB from "hex-rgb";

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

    ::-webkit-scrollbar {
        width: 1em;
    }

    ::-webkit-scrollbar-track {
        background: ${theme.colors.formBackground};
        border-radius: 100vw;
        margin-block: 0.5em;
    }

    ::-webkit-scrollbar-thumb {
        background: ${hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.85 })};
        border: 0.20em solid ${theme.colors.formBackground};
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.primary};
    }

    @supports(scrollbar-color: red blue) {
        * {
            scrollbar-color: ${hexToRGB(theme.colors.primary, { format: 'css', alpha: 0.85 })} ${theme.colors.formBackground};
            scrollbar-width: thin;
        }
    }

`;

export default GlobalStyle;