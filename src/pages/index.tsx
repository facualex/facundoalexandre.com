import * as React from "react"
import Helmet from 'react-helmet'
import GlobalStyle from "../GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
import { theme } from '../config/theme'
import App from "./App"

// import i18n (needs to be bundled ;)) 
import '../config/i18n';

const FullPageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 1.5rem;
`

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
      <React.Suspense fallback={FullPageLoader}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default IndexPage
