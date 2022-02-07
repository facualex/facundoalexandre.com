import * as React from "react"
import Helmet from 'react-helmet'
import GlobalStyle from "../GlobalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from '../config/theme'
import App from "./App"

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Facundo Alexandre</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap" />
      </Helmet>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export default IndexPage
