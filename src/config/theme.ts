import { DefaultTheme } from "styled-components"

export interface Color {
    primary: string;
    formBackground: string;
    background: string;
    backgroundGradient: string;
    darkerBackground: string;
    white: string;
    textHighlight: string;
    icon: string;
}

export interface FontSize {
    title: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Color,
    fontSizes: FontSize,
  }
}

export const theme: DefaultTheme = {
    colors: {
	    primary: "#37B194",
        background: "rgba(10,39,51,1)",
        darkerBackground: "#0C1F27",
        backgroundGradient: "linear-gradient(90deg, rgba(10,39,51,1) 0%, rgba(10,39,51,0.95) 100%)",
	    formBackground: "#113949",
        white: "#ffffff",
        textHighlight: "#8D8D8D",
        icon: "#3C7A89",
    },
    fontSizes: {
        title: '7rem',
    }
}
